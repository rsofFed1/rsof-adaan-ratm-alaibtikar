// Define translations (only for AR)
const translations = {
    AR: {
        welcome: "مرحبا",
        description: "هذا نص تجريبي",
        welcome: "مرحبا",
        description: "هذا نص تجريبي",
        Home: "بيت",
        About: "معلومات عنا",
        Services: "خدمات",
        WhyUs: "لماذا نحن؟",
        digital_marketing: "التسويق الرقمي  والإعلان",
        digital_marketing_desc: "التسويق الرقمي والإعلان - استراتيجيات لتعزيز ظهورك وزيادة المبيعات",
        read_more: "اقرأ المزيد",
        branding: "العلامة التجارية <br> والهوية البصرية",
        branding_desc: "العلامة التجارية والهوية البصرية - تصميم هويات فريدة تبرز",
        digital_platform: "تطوير المنصات الرقمية",
        digital_platform_desc: "تطوير المنصات الرقمية - إنشاء مواقع وتطبيقات تعزز وجودك الرقمي",
        our_services: "خدماتنا",
        digital_journey: "ابدأ رحلتك الرقمية مع رتم الابتكار!",
        digital_marketing: "التسويق الرقمي والإعلان",
        marketing_desc: "استراتيجيات لتعزيز ظهورك وزيادة المبيعات",
        data_analytics: "تحليل البيانات والتسويق الاستراتيجي",
        analytics_desc: "تقديم رؤى لاتخاذ قرارات أفضل",
        event_management: "إدارة الفعاليات والعلاقات العامة",
        event_desc: "إنشاء فعاليات لا تُنسى وروابط ذات معنى",
        view_all: "عرض الكل",
        about_us: "من نحن",
        about_desc: "في رتم الابتكار، نحول الأفكار إلى تجارب رقمية استثنائية. من خلال دمج التسويق الرقمي والتصميم الإبداعي وتطوير المنصات الرقمية، نساعدك على تحقيق أهدافك بطرق مبتكرة.",
        why_choose: "لماذا تختار رتم الابتكار؟",
        marketing_solutions: "✔ حلول تسويقية شاملة لتعزيز رؤية علامتك التجارية",
        creativity: "✔ إبداع بلا حدود في التصميم والهوية البصرية",
        tech_advancements: "✔ تقنيات متطورة لبناء مواقع ويب وتطبيقات متميزة",
        data_strategies: "✔ استراتيجيات تعتمد على البيانات لتحقيق نجاح مستدام",
        event_management: "✔ إدارة الفعاليات والعلاقات العامة التي تترك انطباعًا دائمًا",
        read_more: "اقرأ المزيد",
        why_choose_us: "لماذا تختار نحن",
        marketing_solutions: "حلول تسويقية شاملة",
        marketing_solutions_desc: "عزز رؤية علامتك التجارية من خلال إبداعنا اللامحدود في التصميم والهوية البصرية. نستخدم أحدث التقنيات لإنشاء مواقع ويب وتطبيقات استثنائية، مما يضمن استراتيجيات تعتمد على البيانات لتحقيق نجاح مستدام. خدماتنا في إدارة الفعاليات والعلاقات العامة تترك انطباعًا دائمًا.",
        creativity_tech: "إطلاق العنان للإبداع اللامحدود والتكنولوجيا المتقدمة",
        creativity_tech_desc: "في رتم الابتكار للحلول الرقمية، نؤمن بأن الإبداع لا حدود له. يعمل فريقنا من المصممين الموهوبين على ابتكار هويات بصرية فريدة وجذابة تتماشى مع جوهر علامتك التجارية. نحن ندرك أن الحضور البصري القوي ضروري للتميز في السوق التنافسية اليوم، ونستغل إبداعنا اللامحدود لجعل رؤيتك حقيقة.",
        data_strategies_events: "تمكين النجاح من خلال استراتيجيات تعتمد على البيانات وفعاليات لا تُنسى",
        data_strategies_events_desc: "في رتم الابتكار للحلول الرقمية، ندرك أن النجاح المستدام يعتمد على اتخاذ قرارات مستنيرة. تم تصميم استراتيجياتنا المعتمدة على البيانات لتزويدك برؤى قابلة للتنفيذ تساعد عملك على تحقيق النمو والمرونة. من خلال تحليل اتجاهات السوق وسلوك المستهلك، نساعدك في اتخاذ خيارات استراتيجية تعزز رؤية علامتك التجارية وتضمن نجاحًا طويل الأمد في سوق ديناميكية.",
        address: "العنوان",
        location: "الموقع",
        call: "اتصل +01 1234567890",
        email: "ratmalaibtikar@gmail.com",
        info: "معلومات",
        info_desc: "من الضروري، مما يجعل هذا أول منشئ حقيقي على الإنترنت. يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، مع مجموعة مختارة.",
        links: "الروابط",
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        why_us: "لماذا نحن",
        subscribe: "اشترك",
        enter_email: "أدخل البريد الإلكتروني",
        subscribe_btn: "اشترك",
        copyright: "© 2025 جميع الحقوق محفوظة لشركة راتم الابتكار",
        // Ratm_Alaibtikar:"رتم الابتكار"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");

        // Use Arabic translation if available, otherwise use default (EN_US) text
        element.textContent = lang === "AR" && translations.AR[key] 
            ? translations.AR[key] 
            : element.dataset.defaultText;
    });

    // Handle placeholders separately
    document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        element.setAttribute("placeholder", 
            lang === "AR" && translations.AR[key] 
            ? translations.AR[key] 
            : element.dataset.defaultPlaceholder
        );
    });

    // Apply RTL for Arabic
    document.body.classList.toggle("rtl", lang === "AR");

    // Save preference in localStorage
    localStorage.setItem("selectedLang", lang);
}

// Event listener for language switch
document.addEventListener("DOMContentLoaded", function () {
    // Ensure default is EN_US if no preference exists
    let savedLang = localStorage.getItem("selectedLang") || "EN_US";
    localStorage.setItem("selectedLang", savedLang);

    // Store the default (EN_US) text as data attributes
    document.querySelectorAll("[data-translate]").forEach(element => {
        element.dataset.defaultText = element.textContent;
    });

    // Store default placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
        element.dataset.defaultPlaceholder = element.getAttribute("placeholder");
    });

    // Set the dropdown to the correct language
    const languageDropdown = document.querySelector("select");
    if (languageDropdown) {
        languageDropdown.value = savedLang;
        languageDropdown.addEventListener("change", function () {
            switchLanguage(this.value);
        });
    }

    // Apply the default language
    switchLanguage(savedLang);
});
