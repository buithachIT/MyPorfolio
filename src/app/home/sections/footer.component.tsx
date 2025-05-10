export default function FooterSection() {
    return (
        <footer className=" bg-white dark:bg-darkbg flex flex-col justify-center items-center px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-darktext mb-4">Let's connect!</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
                Whether you have a question, a project idea, or just want to say hi, I'm always open to chat.
            </p>
            <div className="flex gap-4">
                <a href="mailto:buithach.it@gmail.com" className="text-primary hover:underline">Email</a>
                <a href="https://github.com/buithachIT" target="_blank" className="text-primary hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/buithachIT" target="_blank" className="text-primary hover:underline">LinkedIn</a>
            </div>
            <p className="mt-10 text-xs text-gray-400">© 2025 Công Thạch. All rights reserved.</p>
        </footer>
    );
} 