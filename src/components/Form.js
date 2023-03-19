import { useRef, useEffect } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import env from "react-dotenv";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Form = ({
    inputChangeHandler,
    submitHandler,
    enteredURL,
    setHasError,
}) => {
    const captchaRef = useRef(null);

    useEffect(() => {
        captchaRef.current.reset();
    }, []);

    const onRecaptchaChange = () => {
        setHasError(false);
    };

    const checkRecaptchaAndSubmit = (e) => {
        e.preventDefault();

        const captchaToken = captchaRef.current.getValue();
        captchaRef.current.reset();

        if (!captchaToken) {
            setHasError("Please check the reCAPTCHA box to continue.");
        } else {
            submitHandler(e, captchaToken);
        }
    };
    return (
        <form onSubmit={checkRecaptchaAndSubmit}>
            <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="domain-input"
                        label="Enter Your Site's Domain"
                        placeholder="your-site.com"
                        variant="outlined"
                        required
                        value={enteredURL}
                        onChange={inputChangeHandler}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        sx={{ height: "100%" }}
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<SearchIcon />}
                    >
                        Find All Links
                    </Button>
                </Grid>
            </Grid>
            <ReCAPTCHA
                sitekey={env.GOOGLE_RECAPTCHA_SITE_KEY}
                ref={captchaRef}
                onChange={onRecaptchaChange}
            />
        </form>
    );
};

export default Form;
