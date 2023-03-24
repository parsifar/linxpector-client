import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";

import Form from "./components/Form";
import Loading from "./components/Loading";
import Results from "./components/Results";
import Header from "./components/Header";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

const App = () => {
    const muiTheme = createTheme({
        palette: {
            primary: {
                main: teal[500],
            },
        },
    });

    // enteredURL state is set here and passed down to Form because it's updated in the Form component but we need the state here to send to the backend
    const [enteredURL, setEnteredURL] = useState("");
    // isLoading state is set here and not passed down
    const [isLoading, setisLoading] = useState(false);
    // hasError state is set here and passed down to Form because we need to update is in Form but need the state here to render the error message
    const [hasError, setHasError] = useState(false);
    // backendResponse state is set here, when we get the backend response we update it and pass it down to the Results component
    const [backendResponse, setBackendResponse] = useState([]);
    // crawled pages count stats
    const [crawledPagesCount, setCrawledPagesCount] = useState(false);

    const navigate = useNavigate();

    // this function runs when the form is submitted. it sends the entered URL and the captcha token to the backend. if there's any errors it shows the error, otherwise redirects the user to /results route
    const submitHandler = (e, captchaToken) => {
        e.preventDefault();

        setisLoading(true);
        setHasError(false);
        setBackendResponse([]);

        // use the production endpoint on production build
        let backendUrl =
            process.env.NODE_ENV === "development"
                ? ""
                : "https://backend.linxpector.com";

        let crawlEndpoint = backendUrl + "/crawl";
        // unique request id
        let requestId = "request" + Date.now();

        fetch(crawlEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestId: requestId,
                enteredURL: enteredURL,
                captchaToken: captchaToken,
            }),
        }).then((response) => {
            //close the progress event source
            progressEventsource.close();
            setCrawledPagesCount(0);

            // check response code
            if (response.status !== 200) {
                setisLoading(false);

                response.json().then((error) => {
                    setHasError(error);
                });
            } else {
                // status 200
                response.json().then((data) => {
                    setBackendResponse(data);
                    setisLoading(false);

                    navigate("/results");
                });
            }
        });

        let backendProgressUrl =
            process.env.NODE_ENV === "development"
                ? "http://localhost:5000/progress-stream"
                : "https://backend.linxpector.com/progress-stream";

        // subscribe to event stream
        let progressEventsource = new EventSource(backendProgressUrl);

        // specific event message for requestId
        progressEventsource.addEventListener(
            requestId,
            function (e) {
                let count = JSON.parse(e.data).crawled;
                setCrawledPagesCount(count);
            },
            false
        );
    };

    // this function runs on input change and updates the enteredURL state
    const inputChangeHandler = (e) => {
        setEnteredURL(e.target.value);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Header />

            <Container sx={{ mt: 10, mb: 15 }}>
                <CssBaseline />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Introduction />
                                <Form
                                    submitHandler={submitHandler}
                                    enteredURL={enteredURL}
                                    inputChangeHandler={inputChangeHandler}
                                    setHasError={setHasError}
                                />

                                {isLoading && (
                                    <Loading count={crawledPagesCount} />
                                )}

                                {hasError && (
                                    <Alert sx={{ my: 4 }} severity="error">
                                        {hasError}
                                    </Alert>
                                )}
                            </>
                        }
                    />

                    <Route
                        path="/results"
                        element={<Results backendResponse={backendResponse} />}
                    />
                </Routes>
            </Container>

            <Footer />
        </ThemeProvider>
    );
};

export default App;
