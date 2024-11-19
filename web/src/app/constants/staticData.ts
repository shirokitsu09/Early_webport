// Types
type PORTFOLIO_DATA = {
    title: string,
    img_src: string,
    img_alt: string,
    desc: string,
    category: string[],
}

type SERVICE_DATA = {
    title: string,
    img_src: string,
    img_alt: string,
    text_gradient: string,
}

// Data
export const portfolio_data: PORTFOLIO_DATA[] = [
    {
        title: "K-LINK",
        img_src: "./portfolio/k-link.svg",
        img_alt: "K-LINK",
        desc: "แอปพลิเคชันสำหรับนักศึกษา เพื่อใช้ในการค้นหาเพื่อนหรือผู้ที่มีความสนใจในการทำกิจกรรมต่างๆ ร่วมกัน พร้อมกับฟีเจอร์ที่สนับสนุนด้านการศึกษา ได้แก่ ฟีเจอร์ที่สามารถให้นักศึกษาสามารถสร้างกลุ่ม หรือค้นหากลุ่มาหรับการติววิชาที่ต้องการหรือสนใจ อีกทั้งยังมีฟีเจอร์ในการแบ่งปันเนื่อหาที่เรียนของวิชาต่างๆอีกด้วย ไม่ว่าจะเป็นสไลด์, เอกสาร, สรุปที่เขียนเอง หรือแม้กระทั่งแนวข้อสอบ เป็นต้น",
        category: ["mobile"],
    },
    {
        title: "OfficeSCOLDEV",
        img_src: "./portfolio/k-link.svg",
        img_alt: "Office-SCOLDEV",
        desc: "เว็บไซต์สำหรับให้ผู้ใช้สามารถมอบหมายงานให้กับสมาชิกทีมได้ เพิ่มความสะดวกสบายในการทำงานเป็นทีม และบริหารจัดการได้ง่ายขึ้น โดยมีฟังก์ชันต่างๆมากมาย ไม่ว่าจะเป็นการดูงานที่ต้องทำหรือมอบหมายงาน สามารถส่งคำร้องต่างๆไปยังหัวหน้าหรือผู้โดยแลได้ ทั้งเรื่องการเบิกเงิน และการลา นอกจากนี้ยังสามารถติดตามการเข้าทำงานของสมาชิกผ่านฟังก์ชัน เข้างาน เพื่อตรวจสอบและแสดงถึงสมาชิกที่กำลังทำงานอยู่ ซึ่งช่วยให้สามารถติดตามการเข้างานของสมาชิกทีมได้",
        category: ["web"],
    },
    {
        title: "Mushroom Classification",
        img_src: "./portfolio/k-link.svg",
        img_alt: "CNN-mushrooms-classify",
        desc: "แอปพลิเคชันสำหรับการวิเคราะห์เห็ด ว่าเห็นนั้นมีคุณสมบัติอย่างไร กินได้หรือไม่ หรืออันตรายเพียงใด พร้อมทั้งบอกข้อมูลต่างๆ ได้แก่ วิธีปรุง ผลกระทบหากรับประทาน แหล่งที่มา ชื่อท้องถิ่น ทั้งไทยและอังกฤษ รวมทั้งชื่อทางวิทยาศาสตร์ โดยจะใช้ AI ในการแยกชนิดเห็ดจากรูปภาพและส่งข้อมูลของเห็นนั้นออกมา",
        category: ["mobile"],
    },
    {
        title: "PopcornTime",
        img_src: "./portfolio/k-link.svg",
        img_alt: "popcorntime",
        desc: "เว็บไซต์สำหรับให้ผู้ใช้สามารถเลือกดูเนื้อหาที่เกิดทั้งหมด หรือเรื่องเรื่องราวโดยสรุปของหนังหรือซีรี่ส์ตอนต่างๆ โดยเว็บไซต์จะประกอบด้วยระบบ login, register และ profile ของผู้ใช้ อีกทั้งยังมีระบบดูประวัติการเข้าดูเนื้อหา พร้อมกับระบบการลบประติ บันทึกหนังหรือซีรี่ส์ที่ชอบ และระบบการกรองเพื่อแบ่งประเภทของเนื้อหา ซึ่งได้แก่ หนัง และซีรีส์นั่นเอง",
        category: ["web"],
    },
    {
        title: "Web-PortFolio Silver",
        img_src: "./portfolio/k-link.svg",
        img_alt: "1",
        desc: "เว็บไซต์สำหรับรับทำโปรเจ็คต่างๆ ไม่ว่าจะเป็น website สำหรับการจัดการ รวมถึงในรูปแบบ web-application โดยผู้ใช้หรือลูกค้าสามารถดูผลงานที่ผ่านมาของสมาชิกทีม ทักษะและความนัด รวมทั้งตำแหน่งต่างๆ อีกทั้งยังมีรายละเอียดการบริการของเรา รวมทั้งมีฟอร์มสำหรับการส่งรายละเอียดของโปรเจ็คที่ต้องการมาที่พวกเรา",
        category: ["web"],
    },
    {
        title: "Web-PortFolio Blue",
        img_src: "./portfolio/k-link.svg",
        img_alt: "1",
        desc: "เว็บไซต์สำหรับรับทำโปรเจ็คต่างๆ ไม่ว่าจะเป็น website สำหรับการจัดการ รวมถึงในรูปแบบ web-application โดยผู้ใช้หรือลูกค้าสามารถดูผลงานที่ผ่านมาของสมาชิกทีม ทักษะและความนัด รวมทั้งตำแหน่งต่างๆ อีกทั้งยังมีรายละเอียดการบริการของเรา รวมทั้งมีฟอร์มสำหรับการส่งรายละเอียดของโปรเจ็คที่ต้องการมาที่พวกเรา",
        category: ["web"],
    },
    {
        title: "mobile, web",
        img_src: "./portfolio/k-link.svg",
        img_alt: "1",
        desc: "1",
        category: ["mobile", "web"],
    },
]

export const service_data: SERVICE_DATA[] = [
    {
        title: "Responsive\nWebsite",
        img_src: "./service/responsive.svg",
        img_alt: "Responsive Website",
        text_gradient: '110deg, rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',
    },
    {
        title: "Portfolio\nWebsite",
        img_src: "./service/portfolio.svg",
        img_alt: "Portfolio Website",
        text_gradient: '-126deg, rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',   


    },
    {
        title: "E-Commerce\nWebsite",
        img_src: "./service/e-commerce.svg",
        img_alt: "E-Commerce Website",
        text_gradient: '162deg,rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',    


    },
    {
        title: "Coperate\nWebsite",
        img_src: "./service/coperate.svg",
        img_alt: "Coperate Website",
        text_gradient: '24deg, rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',   


    },
    {
        title: "Mobile\nApplication",
        img_src: "./service/mobile.svg",
        img_alt: "Mobile Application",
        text_gradient: '-90deg,rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',


    },
    {
        title: "Attendance\nSystem",
        img_src: "./service/attendance.svg",
        img_alt: "Attendance System",
        text_gradient: '-176deg, rgba(101, 128, 225, 1) 0%, rgba(88, 68, 215, 1) 50%, rgba(30, 30, 30, 1) 100%',
    },
]