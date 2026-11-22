import { useTranslation } from "react-i18next"
import {useEffect} from "react";

export const Redirect = ({ url }) => {
    const { t } = useTranslation()
    useEffect(() => {
        window.location.href = url;
    }, [url]);

    return <h5>{t("redirect", "Redirecting...")}</h5>;
};