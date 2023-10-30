export {}
declare global {
    interface Window {
        ga: any; // 👈️ turn off type checking
    }
}

// declare window: any;