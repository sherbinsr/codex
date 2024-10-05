import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  state = 'hide'

  showMore = false;

  readMore: boolean[] = [];

  toggleReadMore() {
    this.showMore = !this.showMore;
  }

  togglesReadMore(index: number): void {
    this.readMore[index] = !this.readMore[index];
  }
  constructor(public el: ElementRef) {
    this.services.forEach(() => this.readMore.push(false));
   }

   
  ngOnInit(): void {
 
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 600) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }
    quotes=
    {
      welcome:"  Welcome to codeX ",
      quote:"Your One-Stop Online Web Services Provider!",
      secondQuote:" At codeX, we are committed to offering complete online web services to meet your typical needs.",
      getInTouchBtn:"Get in Touch"
    }
    aboutus=
    {
      heading:"Elevate Your Online Experience with Our WebServices!",
      data:"At CodeX, we are passionate about creating impactful digital solutions that drive business success. As a forward-thinking IT service company, we focus on delivering top-tier app development and web solutions designed to meet the evolving needs of modern businesses.Our team of skilled developers and creative minds work collaboratively to build applications that are not only functional but also user-friendly and scalable. Whether you're looking to enhance your digital presence or streamline operations with a custom app, CodeX is here to bring your vision to life.With a commitment to quality, innovation, and client satisfaction, CodeX strives to be your trusted partner in navigating the digital landscape. Let's work together to transform ideas into reality!"
    }
    glance=
    {
      glanceHeader:"Codex at a ",
      glanceGreen:"Glance",
      glanceMessage:"Hello everyone, we are pleased to see you here. Take a visit to our website and explore our affordable service packages.",
      glanceBtn:"Read more"
    }
    servicedesc=
    {
      serviceDescription:"Astream offers affordable budget-friendly services regarding online website solutions. Our services include;"
    }
    services = [
      {
        title: 'Web Development',
        description: 'At CodeX, we provide comprehensive web development services tailored to meet the unique needs of your business. Our team of skilled developers and designers work collaboratively to create responsive, user-friendly websites that not only look great but also perform exceptionally well across all devices.We specialize in custom website solutions, including e-commerce platforms, content management systems, and dynamic web applications. From the initial design phase to development and deployment, we ensure that every aspect of your website is optimized for functionality, speed, and SEO. With a focus on delivering an engaging user experience, CodeX is committed to helping your business thrive online.',
         link:'../assets/webdevelopment.png'
      },
      {
        title: 'Mobile Application Development',
        description: 'At CodeX, we specialize in developing high-quality mobile applications for all platforms, including iOS, Android, and cross-platform solutions. Our team of expert developers is dedicated to creating seamless, user-friendly mobile experiences that engage users and drive business success.From initial concept to final deployment, we work closely with you to ensure that your app meets your business goals and delivers exceptional performance. With a focus on scalability, functionality, and innovative design, CodeX is committed to bringing your mobile app vision to life, regardless of the platform.',
       link:'../assets/appdevelopment.png'
      },
      {
        title: 'Data Analytics',
        description: 'At CodeX, we understand that data is a powerful asset for driving business success. Our data analytics services help you unlock valuable insights from your data, enabling informed decision-making and strategic planning.We offer comprehensive analytics solutions, including data collection, processing, and visualization. Our team utilizes advanced analytical tools and techniques to identify trends, patterns, and opportunities within your data. Whether you are looking to enhance customer experience, optimize operations, or boost marketing effectiveness, we tailor our approach to meet your specific goals.With CodeX, you can transform raw data into actionable insights that drive growth and innovation. Let us help you harness the power of data to propel your business forward',
         link:'../assets/website maintainence.png'
      },
      {
        title: 'Digital Marketing',
        description: 'At CodeX, we offer comprehensive digital marketing services designed to elevate your brand and connect you with your target audience. Our approach combines data-driven strategies with creative solutions to maximize your online presence and drive measurable results.We provide a range of services, including search engine optimization (SEO), social media marketing, content marketing, email marketing, and pay-per-click (PPC) advertising. Our team conducts thorough market research to understand your audience and develop tailored campaigns that resonate with them.With a focus on building long-lasting relationships and increasing engagement, CodeX is committed to helping your business achieve its digital marketing goals and grow in the competitive online landscape.',
         link:'../assets/digitalmarketing.png'
      },
      {
        title: 'UI/UX Design',
        description: 'At CodeX, we believe that great design is at the heart of every successful application and website. Our UI/UX design services focus on creating intuitive, user-friendly interfaces that enhance the overall user experience and drive engagement.Our team of experienced designers conducts thorough user research to understand your target audience and their needs. We create wireframes, prototypes, and visually stunning designs that align with your brand identity while ensuring seamless navigation and functionality.By prioritizing usability and aesthetics, we strive to deliver designs that not only look great but also provide an exceptional experience for users. Let CodeX elevate your digital products with compelling UI/UX design that captivates and retains your audience.',
       link:'../assets/hosting.png'
      },
      {
        title: 'E-commerce Solutions',
        description: 'At CodeX, we specialize in delivering robust e-commerce solutions that empower businesses to thrive in the digital marketplace. Our team is dedicated to creating customized online stores that provide a seamless shopping experience for your customers, regardless of the platform.We offer end-to-end e-commerce development services, including website design, payment gateway integration, inventory management, and user-friendly interfaces. Our solutions are optimized for performance and security, ensuring that your customers enjoy a safe and efficient shopping experience.With a focus on scalability and growth, CodeX is committed to helping you establish a strong online presence and drive sales. Let us help you transform your e-commerce vision into reality!',
     link:'../assets/domain.png'
      }
    ];
  }
