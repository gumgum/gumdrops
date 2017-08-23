The `<Avatar>` component can display a user's photo, a brand's logo, or a flag icon for internationalization. 

The avatar can include a dropdown menu, which is meant to be shown when the avatar is clicked on.

If the avatar is expandable, pass in a callback function that sets the state, and include the state in your component. You must also pass in an array of objects of names and paths for the menu. 

**Example**:
```
state {
    avatarOpen: false
}

const toggleAvatar = () => {
    this.setState({ open: !this.state.toggleAvatar });
};

return(
    <Avatar
        open={ this.state.avatarOpen }
        callback={ this.toggleAvatar }
        menuOptions={ AvatarMenu }
    />
)
```

**Options Format**:
```
const AvatarMenu = [
    { name: 'Change Password', path: '/account/change-password' },
    { name: 'Change Brand', path: '/account/change-brand' },
    { name: 'Login to Twitter', path: '/account/twitter-login' },
    { name: 'Switch to Annotator', path: '/account/instagram-login' },
    { name: 'Logout', path: '/account/logout' }
];
```
