/* =========================================
   GOOGLE ANALYTICS SETUP (High Priority)
   ========================================= */
   (function() {
    const gaId = 'G-VCTYXN4T2Z'; 

    // 1. Create the script tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    
    // 2. Inject at the VERY TOP of <head> (High Priority)
    // This matches Google's "immediately after the opening <head> tag" instruction
    const head = document.head;
    head.insertBefore(script, head.firstChild);

    // 3. Initialize the global dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId);

    console.log(`>> SYSTEM_LOG: Analytics initialized for ID: ${gaId}`);
})();