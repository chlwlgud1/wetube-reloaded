// const handleWatchVideo = (req, res) => res.send("Watch Video");
// const handleEditVideo = (req, res) => res.send("Edit Video");

export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"});
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload")
export const deleteVideo = (req, res) => res.send("delete Video");