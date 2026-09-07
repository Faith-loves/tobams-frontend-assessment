# Tobams Group — Frontend Assessment

Built with Next.js App Router, TypeScript, and Tailwind CSS v4. Components live in `src/components`; the page is composed in `src/app/page.tsx`.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`, then `npm start`.

```bash
npm run lint
npx tsc --noEmit --incremental false
```

## Live URL

[https://tobams-frontend-assessment-sigma.vercel.app/](https://tobams-frontend-assessment-sigma.vercel.app/)

## Design decisions and responsive behavior

- Figma design: [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)
- The supplied Figma measurements describe a 1440px desktop composition. The reference mobile composition is applied at the base Tailwind size, tablet behavior at `md:`, and desktop columns at `lg:`. Fixed heights are only retained where text cannot wrap; content-led sections grow to prevent clipping.
- Tailwind responsive utilities (`sm:`, `md:`, `lg:`, and `xl:`) handle every breakpoint. No custom CSS media queries or viewport scaling workarounds are used.
- Mobile navigation uses a keyboard-accessible menu control. The desktop primary and secondary navs appear from `md:`. Image/text content stacks on mobile, and the reference-specific mobile copy is used where the supplied mobile screenshot differs from desktop copy.
- Testimonials render one full-width card on mobile, two cards on tablet, and three cards on desktop. The arrow controls advance one complete card at a time without exposing a browser scrollbar.
- Nunito and Nunito Sans are loaded through `next/font`; Figma `Spacing/N` tokens are treated as pixel values. The logo image retains its source pixels and is visually cropped in its transparent canvas so its visible mark matches the reference scale.
- The user approved the 32px consultant button gap and a 47px desktop gap in the final call-to-action section. Footer copyright retains the supplied 2024 copy. Legal underlines use 1px so they remain visible; a literal 0px thickness would hide them.
- Social, policy, navigation, and call-to-action destinations remain pending. The email and phone links work; other existing placeholder controls do not yet navigate to real destinations.

## AI-assisted visual review

- AI image inspection was used to compare the supplied desktop and mobile screenshots with local browser renders. It informed breakpoint layout, text ordering, visible logo bounds, and carousel behavior; it did not generate or replace any brand artwork.
- This README was rewritten and AI-guided against the assessment requirements, including setup, stack, responsive behavior, accessibility, design decisions, known issues, and validation.

## Known issues

- The public GitHub repository URL is not listed here yet.
- `npm run build`, `npm run lint`, and `npx tsc --noEmit --incremental false` pass.

## Verification

Responsive browser checks cover 425px, 768px, and 1280px, including page overflow, image loading, text wrapping, footer layouts, mobile menu keyboard activation, and testimonial navigation.
