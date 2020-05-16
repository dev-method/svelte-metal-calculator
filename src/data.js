let metalls = [
        {id:1, name:"Алюминий",
            group:[{name:"А0", density:2710},
                {name:"А5", density:2710},
                {name:"А6", density:2700},
                {name:"А7", density:2700},
                {name:"А8", density:2700},
                {name:"А95", density:2700},
                {name:"А97", density:2700},
                {name:"А99", density:2700},
                {name:"А995", density:2700},
                {name:"А999", density:2700},
                {name:"А99", density:2700},
                {name:"АВ", density:2700},
                {name:"АД", density:2710},
                {name:"АД0", density:2710},
                {name:"АД1", density:2710},
                {name:"АДС", density:2710},
                {name:"АК4", density:2770},
                {name:"АК4М4", density:2800},
                {name:"АК5М7", density:2800},
                {name:"АК6", density:2800},
                {name:"АК7", density:2800},
                {name:"АК8", density:2800},
                {name:"АЛ1", density:2700},
                {name:"АЛ19", density:2700},
                {name:"АЛ2", density:2700},
                {name:"АЛ3", density:2700},
                {name:"АЛ32", density:2700},
                {name:"АЛ4", density:2700},
                {name:"АЛ5", density:2700},
                {name:"АЛ6", density:2700},
                {name:"АЛ7", density:2700},
                {name:"АЛ8", density:2700},
                {name:"АЛ9", density:2700},
                {name:"АМг1", density:2700},
                {name:"АМг2", density:2680},
                {name:"АМг3", density:2670},
                {name:"АМг5", density:2650},
                {name:"АМг5П", density:2650},
                {name:"АМг6", density:2640},
                {name:"АМц", density:2730},
                {name:"В65", density:2850},
                {name:"В93", density:2850},
                {name:"В94", density:2850},
                {name:"В95", density:2850},
                {name:"Д1", density:2800},
                {name:"Д16", density:2780},
                {name:"Д18", density:2760},
                {name:"Д19", density:2760}
            ]},
        {id:2, name:"Бронза",
            group:[{name:"БрА5", density:8200},
                {name:"БрА7", density:7800},
                {name:"БрА9Ж3Л", density:7600},
                {name:"БрА9Ж4", density:7600},
                {name:"БрАЖ9-4", density:7500},
                {name:"БрАЖН10-4-4", density:7500},
                {name:"БрАМц9-2", density:7600},
                {name:"БрБ2", density:8200},
                {name:"БрБ2.5", density:8230},
                {name:"БрКМц3-1", density:8400},
                {name:"БрКН1-3", density:8800},
                {name:"БрО10", density:8800},
                {name:"БрО10Ф1", density:8760},
                {name:"БрО10Ц2", density:8500},
                {name:"БрО5Ц5С5", density:8800},
                {name:"БрО8С12", density:9100},
                {name:"БрОФ6.5-0.15", density:8800},
                {name:"БрОЦ4-3", density:8800},
                {name:"БрОЦС4-4-2.5", density:8900},
                {name:"БрОЦС4-4-4", density:9100},
                {name:"БрС30", density:9540},
                {name:"БрХ1", density:8900},
            ]},
        {id:3, name:"Латунь",
            group:[{name:"Л60", density:8400},
                {name:"Л63", density:8440},
                {name:"Л66", density:8470},
                {name:"Л68", density:8600},
                {name:"Л70", density:8610},
                {name:"Л75", density:8630},
                {name:"Л80", density:8660},
                {name:"Л90", density:8780},
                {name:"Л96", density:8850},
                {name:"ЛА77-2", density:8600},
                {name:"ЛАЖ60-1-1", density:8200},
                {name:"ЛЖМц59-1-1", density:8500},
                {name:"ЛЖС58-1-1", density:8400},
                {name:"ЛМцС", density:8300},
                {name:"ЛО60-1", density:8500},
                {name:"ЛО62-1", density:8500},
                {name:"ЛС59-1", density:8500},
                {name:"ЛС63-3", density:8500},
                {name:"ЛС64-2", density:8500},
                {name:"ЛЦ16К4", density:8300},
                {name:"ЛЦ23А6Ж3Мц2", density:8500},
                {name:"ЛЦ30А3", density:8500},
                {name:"ЛЦ38Мц2С2", density:8500},
                {name:"ЛЦ40С", density:8500},
            ]},
        {id:4, name:"Нержавейка",
            group:[{name:"08Х13", density:7760},
                {name:"12Х17", density:7720},
                {name:"08Х17Т", density:7700},
                {name:"12Х13", density:7720},
                {name:"20Х13", density:7670},
                {name:"30Х13", density:7670},
                {name:"40Х13", density:7650},
                {name:"20Х17Н2", density:7740},
                {name:"08Х18Н10", density:7850},
                {name:"03Х18Н11", density:7900},
                {name:"03Х17Н14М3", density:7750},
                {name:"12Х18Н10Т", density:7920},
                {name:"10Х17Н13М2Т", density:7950},
                {name:"40Х9С2", density:7630},
                {name:"10Х13СЮ", density:7850},
                {name:"15Х18СЮ", density:7700},
                {name:"20Х20Н14С2", density:7800},
                {name:"20Х25Н20С2", density:7720},
                {name:"20Х23Н18", density:7900},
            ]},
        {id:5, name:"Олово",
            group:[{name:"О1", density:7300},
                {name:"О1Пч", density:7300},
            ]},
        {id:6, name:"Cвинец",
            group:[{name:"С0", density:11340},
                {name:"С1", density:11340},
                {name:"С1С", density:11340},
                {name:"С2", density:11340},
                {name:"С3", density:11340},
            ]},
        {id:7, name:"Титан",
            group:[{name:"ВТ1-0", density:4505},
                {name:"ВТ1-00", density:4505},
                {name:"ВТ1-1", density:4505},
                {name:"ВТ14", density:4520},
                {name:"ВТ20", density:4450},
                {name:"ВТ22", density:4600},
                {name:"ВТ3-1", density:4500},
                {name:"ВТ5", density:4400},
                {name:"ВТ5-1", density:4460},
                {name:"ВТ6", density:4430},
                {name:"ОТ4-1", density:4550},
                {name:"ПТ7М", density:4490},
            ]},
        {id:8, name:"Цинк",
            group:[{name:"Ц0", density:7130},
                {name:"Ц0А", density:7130},
                {name:"Ц1", density:7130},
                {name:"ЦА4", density:6600},
                {name:"ЦАМ4-1", density:6700},
                {name:"ЦВ", density:7130},
            ]}
    ]
export default metalls
