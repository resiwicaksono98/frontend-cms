/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// swcMinify: true,

	async rewrites() {
		return [
			{
				source: '/register',
				destination: '/auth/register',
			},
			{
				source: '/login',
				destination: '/auth/login'
			}
		]
	},
}

module.exports = nextConfig
