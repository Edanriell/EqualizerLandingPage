declare module "*.astro" {
	const content: any;
	export default content;
}

declare module "astro:assets" {
	export const Image: any;
}
