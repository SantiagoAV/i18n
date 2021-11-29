import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

var lang = navigator.language.substring(0,2)

const localMessage = () => {
    var messages;
    messages === "es"? messages=localeEsMessages : messages=localeEnMessages;

    return messages;
}

ReactDOM.render(
<IntlProvider locale={lang} messages= {localMessage()}>
    <JobsList/>
</IntlProvider>, document.getElementById("root")
);

