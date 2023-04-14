import { useTranslation, useTranslationLang } from "@mzara/component";
import { Link } from "react-router-dom"

export const Footer = () => {

    const t = useTranslation()

    const { lang, getTranslatedRoute } = useTranslationLang();
    const boldStyle = (curentlang: string) => {
        return curentlang === lang ? "text-bold" : "";
    };

    return (
        <div>
            <p className="copyright text-center mt-30">
                <span><a href="/">{t(`Generic.de.${process.env.REACT_APP_NAME}`)}</a></span>
                <span> ©{new Date().getFullYear()}</span>
            </p>
            <p className="text-center">
                <span> <Link to={getTranslatedRoute("fr")} className={boldStyle("fr")}> {"FR"} </Link></span>
                <span> · </span>
                <span> <Link to={getTranslatedRoute("en")} className={boldStyle("en")}> {"EN"} </Link></span>
            </p>
        </div>
    )
}
