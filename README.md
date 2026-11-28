# Strahovka.lviv - Insurance Website

A modern, bilingual (Ukrainian/English) insurance website built with Next.js, featuring a clean and professional design. The website provides information about insurance services, news updates, and allows users to interact through comments and social media integration.

![Strahovka.lviv Screenshot](public/images/screenshot.png)

## Features

- 🌐 Bilingual support (Ukrainian/English)
- 🔒 Secure authentication with NextAuth.js
- 📱 Responsive design with Tailwind CSS and DaisyUI
- 📝 Rich text editor (TinyMCE) for content management
- 📧 Email notifications
- 🤖 Telegram bot integration
- 📊 Google Analytics integration
- 💬 Disqus comments system
- 🔍 SEO optimized
- 🛡️ Form protection with Google reCAPTCHA
- 📱 Mobile-first approach

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Database:** PostgreSQL (Neon) with Drizzle ORM
- **Authentication:** NextAuth.js
- **Form Handling:** React Hook Form with Yup validation
- **Content Editor:** TinyMCE
- **Email:** Nodemailer
- **Social Integration:** Facebook, Telegram Bot API

## Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- Google reCAPTCHA credentials
- TinyMCE API key

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/strahovka.lviv.git
   cd strahovka.lviv
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables in `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/strahovka"
   NEXT_PUBLIC_RECAPTCHA_KEY="your-recaptcha-public-key"
   RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXT_PUBLIC_TINY_KEY="your-tinymce-key"
   ```

4. Set up the database:
   ```bash
   # DATABASE_URL of a development database in .env.development.local
   npm run db:migrate   # apply migrations from ./drizzle
   npm run db:generate  # after changing src/db/schema.ts: create a new migration
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run debug` - Start development server with trace warnings

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── styles/          # Global styles
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
├── lib/             # Library configurations
├── locales/         # i18n translations
├── config/          # Configuration files
├── assets/          # Static assets
└── @types/          # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact [your-email@example.com](mailto:your-email@example.com)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Drizzle ORM](https://orm.drizzle.team/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
