---
title: Radio - Songrequest

header: 
    enabled: true
    title: Request Music
form:
    -   
        class: form-control
        label: Your name
        name: name
        type: name
        placeholder: MrDemonWolf
        required:
        # Only used sometimes
        size: 40
        maxlength: 127
    - 
        class: form-control
        label: Email Adress
        name: email
        type: email
        placeholder: example@example.com
        required: true
        # Only used sometimes
        size:
        maxlength:
    -   
        class: form-control
        label: song Artist
        name: request[artist]
        type: song-artist
        placeholder: Logic
        required: true
        # Only used sometimes
        size: 40
        maxlength: 127
    -   
        class: form-control
        label: song Name
        name: request[name]
        type: song-name
        placeholder: Man of the year
        required: true
        # Only used sometimes
        size:
        maxlength:
    -   
        class: form-control
        label: Song Link (If you have one)
        name: request[link]
        type: song-link
        placeholder: https://www.youtube.com/watch?v=zFt0tO4Op14
        required: true
        # Only used sometimes
        size: 40
        maxlength: 
---