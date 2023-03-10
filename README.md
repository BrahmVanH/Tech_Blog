# Tech_Blog

homepage: {
blog posts displayed on cards from db
post title
date created
withAuth-
-click to open post on new view

    nav links
        homepage
        dashboard
            withAuth
            sign up
            sign in
        log in
            withAuth
            sign up
            sign in
                username
                password

}

blog-posting: {
blog model items
comment input withAuth
title
contents
}

blog model: {
post_title: '',
contents: '',
user_id: '',
date_id: '',
? comment_id: '',
? commentContent: '',
}

comment model: {
comment_content: '',
user_id: '',

}

user model: {
username: '',
password: '',
user_id:
}

blog element: {
has comment form
comment form updates post... add comment to database entry?
}
