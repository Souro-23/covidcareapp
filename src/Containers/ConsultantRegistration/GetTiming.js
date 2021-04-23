const check = (count)=>{
        let timing
            switch(count){
            case '1':console.log("i am 1");
            return timing =[
                {t:"6am-7pm",sess:"Morning",selected:false},
                {t:"7am-8am",sess:"Morning",selected:false},
                {t:" 8am-9am",sess:"Morning",selected:false},
                {t:"9am-10am",sess:"Morning",selected:false},
                {t:"10am-11am",sess:"Morning",selected:false},
                {t:"11am-12am",sess:"Morning",selected:false}
            ]
            case '2':console.log("i am 2");
            return timing =[
                {t:"12pm-1pm",sess:"Afternoon",selected:false},
                {t:"1pm-2pm",sess:"Afternoon",selected:false},
                {t:"2pm-3pm",sess:"Afternoon",selected:false},
                {t:"3pm-4pm",sess:"Afternoon",selected:false},
                {t:"4pm-5pm",sess:"Afternoon",selected:false},
                {t:"5pm-6pm",sess:"Afternoon",selected:false}
            ]
            case '3':console.log("i am 3");
            return timing =[
                {t:"6pm-7pm",sess:"Evening",selected:false},
                {t:"7pm-8pm",sess:"Evening",selected:false},
                {t:" 8pm-9pm",sess:"Evening",selected:false},
                {t:"9pm-10pm",sess:"Evening",selected:false},
                {t:"10pm-11pm",sess:"Evening",selected:false},
                {t:"11pm-12am",sess:"Evening",selected:false}
            ]
            case '4': console.log("i am 4");
            return timing =[
                {t:"12am-1am",sess:"Night",selected:false},
                {t:"1am-2am",sess:"Night",selected:false},
                {t:"2am-3am",sess:"Night",selected:false},
                {t:"3am-4am",sess:"Night",selected:false},
                {t:"4am-5am",sess:"Night",selected:false},
                {t:"5am-6am",sess:"Night",selected:false}
            ]
        }
}
export default check;