String param = request.getParameter("_csrf");

if (request.getSession().getAttribute("CSRF_TOKEN").equals(param)) {
    return true;
} else {
    response.sendRedirect("/"); return false;
}