import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-theme">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo.jpeg" alt="SochauX Logo" className="h-10 w-auto" />
            <span className="text-secondary">|</span>
            <span className="text-secondary text-sm">
              Smart Digital Solutions
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon
                size={20}
                className="text-secondary hover:text-accent"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon
                size={20}
                className="text-secondary hover:text-accent"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon
                size={20}
                className="text-secondary hover:text-accent"
              />
            </a>
          </div>

          <p className="text-secondary text-sm">
            © 2026 SochauX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
