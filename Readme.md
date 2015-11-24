# Confirm Leave Orchard module Readme



## Project Description

Add a content part that when attached to types, displays a confirm message when the user wants to leave the page despite having modified content in the editor.

You can install the module from the [Gallery](http://gallery.orchardproject.net/List/Modules/Orchard.Module.Piedone.ConfirmLeave).


## Documentation

### First steps

After you have installed and enabled the module, you will see a new content part, named Confirm Leave. Attach this to content types where you want to have a confirmation request appear in the editor if the user changed the editor but attempts to leave it.  
**Note, that currently only flexible content types are supported.** This means that where a hard-coded editor is used (like with Comments) currently there is no way to properly attach any parts to the type, therefore Confirm Leave won't work either.  
**WYSIWYG editors are not supported,** that means changes in such editors (like the built-in TinyMCE) aren't recognized by the module, therefore no prompt will be shown upon leaving (changes in other fields are nevertheless recognized).

### Version history

- v1.0.1 (13.11.2012):
	- Updating to VS 2012 project file format
	- Small fixes
- v1.0 (06.11.2011): 
	- First public release.

The module's source is available in two public source repositories, automatically mirrored in both directions with [Git-hg Mirror](https://githgmirror.com):

- [https://bitbucket.org/Lombiq/orchard-confirm-leave](https://bitbucket.org/Lombiq/orchard-confirm-leave) (Mercurial repository)
- [https://github.com/Lombiq/Orchard-Confirm-Leave](https://github.com/Lombiq/Orchard-Confirm-Leave) (Git repository)

Bug reports, feature requests and comments are warmly welcome, **please do so via GitHub**.
Feel free to send pull requests too, no matter which source repository you choose for this purpose.

This project is developed by [Lombiq Technologies Ltd](http://lombiq.com/). Commercial-grade support is available through Lombiq.