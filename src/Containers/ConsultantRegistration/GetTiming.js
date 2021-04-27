const check = (count)=>{
        let timing
            switch(count){
            case '1': 
            return timing =[
                {t:"6am-7pm",sess:"Morning",selected:false,tFormat:"0600-0700" },
                {t:"7am-8am",sess:"Morning",selected:false, tFormat:"0700-0800"},
                {t:" 8am-9am",sess:"Morning",selected:false, tFormat:"0800-0900"},
                {t:"9am-10am",sess:"Morning",selected:false, tFormat:"0900-1000"},
                {t:"10am-11am",sess:"Morning",selected:false , tFormat:"1000-1100"},
                {t:"11am-12am",sess:"Morning",selected:false, tFormat:"1100-1200"}
            ]
            // TODO rest
            case '2': 
            return timing =[
                {t:"12pm-1pm",sess:"Afternoon",selected:false,tFormat:"1200-1300" },
                {t:"1pm-2pm",sess:"Afternoon",selected:false,tFormat:"1300-1400" },
                {t:"2pm-3pm",sess:"Afternoon",selected:false,tFormat:"1400-1500" },
                {t:"3pm-4pm",sess:"Afternoon",selected:false,tFormat:"1500-1600" },
                {t:"4pm-5pm",sess:"Afternoon",selected:false,tFormat:"1600-1700" },
                {t:"5pm-6pm",sess:"Afternoon",selected:false,tFormat:"1700-1800" }
            ]
            case '3': 
            return timing =[
                {t:"6pm-7pm",sess:"Evening",selected:false,tFormat:"1800-1900" },
                {t:"7pm-8pm",sess:"Evening",selected:false,tFormat:"1900-2000" },
                {t:" 8pm-9pm",sess:"Evening",selected:false,tFormat:"2000-2100" },
                {t:"9pm-10pm",sess:"Evening",selected:false,tFormat:"2100-2200" },
                {t:"10pm-11pm",sess:"Evening",selected:false,tFormat:"2200-2300" },
                {t:"11pm-12am",sess:"Evening",selected:false,tFormat:"2300-2400" }
            ]
            case '4':
            return timing =[
                {t:"12am-1am",sess:"Night",selected:false,tFormat:"0000-0100" },
                {t:"1am-2am",sess:"Night",selected:false,tFormat:"0100-0200" },
                {t:"2am-3am",sess:"Night",selected:false,tFormat:"0200-0300" },
                {t:"3am-4am",sess:"Night",selected:false,tFormat:"0300-0400" },
                {t:"4am-5am",sess:"Night",selected:false,tFormat:"0400-0500" },
                {t:"5am-6am",sess:"Night",selected:false,tFormat:"0500-0600" }
            ]
        }
}
export default check;