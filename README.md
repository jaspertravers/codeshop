# codeshop
[Documentation](documentation.org)

A workspace for programming based art.

## Get started

Install the dependencies

```sh
cd codeshop
npm install
```

then start [Rollup](https://rollupjs.org):

```sh
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src/`, save it, and reload the page to see your changes.

# Basic Code Organization

In `src/`:

``` 
Workspace.svelte
    Collection.svelte
        InstanceMenu.svelte
        SideMenu.svelte
        CodeMirror.svelte
        Sketch.svelte
    
```

One Workspace contains many (0-n) Collections. Each Collection is primarily the
pair (CodeMirror Sketch) which is the text editor and p5js rendering of that
source code. Each Collection also has multiple menus. The side menu controls the
execution of that code: play is run on keystroke, pause is not run.
The bottom menu is a workspace interaction adding new Collections or copying the
above Collection or deleting the above Collection.

# Svelte

This was built from the Svelte template for [Svelte](https://svelte.dev) at https://github.com/sveltejs/template.

