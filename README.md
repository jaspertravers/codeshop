# codeshop

Codeshop is a custom computational notebook like [Jupyter](https://jupyter.org/) or [Observable](https://observablehq.com/) for computational art using [p5js](https://p5js.org/). I recreate the basic computational format of a column of cells, and add in a canvas in line with each cell and extend the "New Cell" options to include cloning the previous cell to facilitate exploration of parallel ideas. Codeshop also improves computational notebook runtime capabilities with [Stopify](https://www.stopify.org/), an execution control library. The prototype was the basis for a CHI-style pilot study about parallel design affordances in software.


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

