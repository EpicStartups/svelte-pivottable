import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            assets: "https://jjagielka.github.io/svelte-pivottable-demo",
        },
        alias: {
            "$lib": "$src/lib"
        }
    },
};

export default config;
