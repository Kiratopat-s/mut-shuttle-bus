// Global type declarations for CSS imports
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

// For SCSS files
declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}