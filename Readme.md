# Confirm Leave Orchard module



## About

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


## Contributing and support

Bug reports, feature requests, comments, questions, code contributions, and love letters are warmly welcome, please do so via GitHub issues and pull requests. Please adhere to our [open-source guidelines](https://lombiq.com/open-source-guidelines) while doing so.

This project is developed by [Lombiq Technologies](https://lombiq.com/). Commercial-grade support is available through Lombiq.