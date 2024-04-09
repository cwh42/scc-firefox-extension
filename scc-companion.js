const reporter_elem = document.querySelector("#reporter-val > span.user-hover");
const reporter_email = reporter_elem.getAttribute("rel");

const scc_button = document.createElement("img");
scc_button.setAttribute("src", browser.runtime.getURL("icons/scc-24.png"));
scc_button.setAttribute("style", "border-radius: 50%; vertical-align: bottom;");
scc_button.className = "scc-button";

const scc_link = document.createElement("a");
scc_link.setAttribute("href", "https://scc.suse.com/admin/users?query=" + reporter_email);
scc_link.setAttribute("title", `Find ${reporter_email} in SCC …`);
scc_link.append(scc_button);

reporter_elem.after(scc_link);


const text_elem = document.querySelector(".user-content-block");
const content = text_elem.innerHTML;

text_elem.innerHTML = content.replace(/\bA\d{6}\b/g, (match) => `${match} <a href="https://scc.suse.com/customer-management#!/search/${match}">${scc_button.outerHTML}</a>`);
