const { createApp } = Vue;

createApp({
    data() {
        return {
            startShow: true,
            listShow: false,
            modalTitle: 'Test',
            currentTest: {},
            currentIndex: null,
            sex: 1,
            url: '',
            systems: [
                {
                    name: 'Центральная нервная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывает ли у Вас ощущение повышенной утомляемости, усталости?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас снижение физической работоспособности, слабость?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас нарушения памяти, концентрации внимания?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас устойчивое желание плакать по незначительному поводу?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенная нервозность, раздражительность?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас нарушения сна (трудности при засыпании, бессонница, неспокойный, тревожный сон)?',
                            ans: 0
                        },
                        {
                            text: 'Понижено ли у Вас зрение больше, чем +, - 2.5?',
                            ans: 0
                        },
                        {
                            text: 'Понижен ли у Вас слух?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас приступы внезапной злости, агрессии?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас депрессии (апатия, безразличие, отсутствие желания работать)?<span>*</span>',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Дыхательная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Часто ли Вы болеете заболеваниями верхних дыхательных путей (ОРЗ,ОРВИ)?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас сухой кашель?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас кашель с выделением мокроты?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас отдышка, затруднения дыхания при ходьбе?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас выделения из носа, затрудненность носового дыхания?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенное отхождение мокроты по утрам?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас осиплость голоса?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас першение в гортани?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас примеси крови в мокроте?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас длительная субфебрильная (37,1-37,2) температура?<span>*</span>',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {   
                    name: 'Сердечно-сосудистая система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывают ли у Вас неприятные ощущения в области сердца, за грудиной?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли в сердце давящего, сжимающего характера при физической нагрузке?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас одышка при быстрой ходьбе, подъёме по лестнице (выше третьего этажа)?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас учащённое сердцебиение или перебои?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас отёки на ногах в конце рабочего дня?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас давящие боли за грудиной или в области сердца в состоянии покоя?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Часто ли Вы в детстве болели ангинами?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас колющие, ноющие боли в сердце?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышение артериального давления?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас неприятные ощущения в области сердца после психоэмоциональных нагрузок?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Кроветворная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Были ли у Вас в анамнезе факты понижения гемоглобина в крови?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас мелькание "мушек" перед глазами?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас "металлический" привкус во рту?',
                            ans: 0
                        },
                        {
                            text: 'Вы плохо переносите значительные физические нагрузки?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас учащённое сердцебиение при физической нагрузке?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас приступы головокружения?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас одышка при физической нагрузке?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас образование тромбов (преимущественно в сосудах нижних конечностей)?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас длительные кровотечения (при мелких травмах и порезах)?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас изменения в анализах крови?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Пищеварительная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывает ли у Вас отрыжка (воздухом или пищей)?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас изжога до или после еды?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас тошнота после еды или по утрам?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас ощущения вздутия живота (повышенный метеоризм) и бурления?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли в эпигастральной области (верхняя часть живота)?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас сухость во рту?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас задержки стула?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас горечь во рту?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас чувство распирания и переполнения в правом подреберье?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас расстройства функций кишечника?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Мочевыделительная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывало ли у Вас болезненное мочеиспускание?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли в поясничной области после переохлаждения?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас учащённое мочеиспускание днём?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас наличие мочи мутного цвета или с примесями крови, слизи? (сделайте ан.мочи)',
                            ans: 0
                        },
                        {
                            text: 'Беспокоят ли Вас отёки под глазами по утрам?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас учащённое мочеиспускание ночью?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Были ли у Вас инфекции мочевыводящих путей ранее?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас высыпания на коже аллергического характера?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенная потливость?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас зуд кожи?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Репродуктивная система',
                    showResult: false,
                    sex: 2,
                    data: [
                        {
                            text: 'Бывают ли у Вас нарушения менструального цикла (задержки, нерегулярность)?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас избыточный рост волос?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли внизу живота?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас увеличение матки (необходимо сделать УЗИ)?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Были ли у Вас в анамнезе заболевания женских половых органов?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли при месячных циклах?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас выделения белого творожистого характера?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас нарушения сексуальной функции?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас отсутствие оргазма?',
                            ans: 0
                        },
                        {
                            text: 'Вы ведёте нерегулярную половую жизнь?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                                {
                    name: 'Репродуктивная система',
                    showResult: false,
                    sex: 1,
                    data: [
                        {
                            text: 'Были ли у Вас в анамнезе заболевания, передающиеся половым путём?',
                            ans: 0
                        },
                        {
                            text: 'Испытываете ли Вы незначительные боли в районе промежности или внизу живота?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас чувство разбитости и снижение работоспособности?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли при мочеиспускании?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас затруднённое мочеиспускание?',
                            ans: 0
                        },
                        {
                            text: 'Существует ли у Вас проблема потенции с постоянным партнёром?',
                            ans: 0
                        },
                        {
                            text: 'Вы ведёте нерегулярную половую жизнь?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас преждевременное семяизвержение?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас снижение сексуального влечения?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас недостаточная эрекция (напряжение)?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Эндокринная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Страдаете ли Вы излишним весом?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас гормональные нарушения (расстройства менструального цикла)?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас увеличение щитовидной железы?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас изменения в молочных железах?<span>*</span> (для женщин) (необходимо сделать УЗИ)',
                            ans: 0
                        },
                        {
                            text: 'Был ли у Вас повышенный сахар в крови?<span>*</span> (Необходимо сделать анализ крови на сахар)',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас постоянная потребность пить?',
                            ans: 0
                        },
                        {
                            text: 'Были ли у Вас в анамнезе эндокринные заболевания?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас длительные незаживающие ранки на коже?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас резкая потеря веса?<span>*</span> (Необходимо посетить эндокринолога)',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас непонятные приступы головокружения, сопровождающиеся сердцебиением?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Костно-мышечная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывают ли у Вас боли в позвоночнике?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас тугоподвижность, скованность движения в суставах?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас нарушения осанки (сколиоз - искривление позвоночника, сутулость)?',
                            ans: 0
                        },
                        {
                            text: 'Испытываете ли Вы боли в ногах при длительной ходьбе?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас похрустывание, щелчки в суставах рук и ног?',
                            ans: 0
                        },
                        {
                            text: 'Есть ли у Вас плоскостопие?',
                            ans: 0
                        },
                        {
                            text: 'Испытываете ли Вы усталость при длительном нахождении в положении стоя?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли в суставах в холодную погоду?',
                            ans: 0
                        },
                        {
                            text: 'Болели ли Вы в детстве ангинами?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас покраснения и отёчность суставов?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Лимфатическая система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывает ли у Вас увеличение лимфоузлов в области шеи, подмышечных впадин?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас увеличение лимфоузлов в области паховых складок?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас болезненность лимфоузлов при прощупывании?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас аллергические реакции?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенная потливость по ночам?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас затруднения носового дыхания?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас головные боли?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас отёки на ногах в течении всего дня?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас резкая слабость, вялость?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенная температура при ОРЗ?<span>*</span>',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Иммунная система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Болеете ли Вы ОРВИ?',
                            ans: 0
                        },
                        {
                            text: 'Имеете ли Вы склонность к переходу острых заболеваний в хронические?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас затяжное, вялое течение острых респираторных заболеваний?',
                            ans: 0
                        },
                        {
                            text: 'Болели ли Вы в детстве хроническими инфекциями?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас слабость?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышенная потливость?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас головные боли?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас гнойничковые высыпания на коже?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас плохое заживление ран со склонностью к нагноению?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас повышение температуры без признаков ОРЗ?<span>*</span>',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                },
                {
                    name: 'Периферическая система',
                    showResult: false,
                    sex: 0,
                    data: [
                        {
                            text: 'Бывает ли у Вас онемение в пальцах рук, особенно во сне?<span>*</span>',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас чувство онемения пальцев ног?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас головокружения?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас боли в области поясницы, связанные с движением, тяжёлой работой?',
                            ans: 0
                        },
                        {
                            text: 'Были ли у Вас приступы радикулита в анамнезе?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас неустойчивость, шаткость походки?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас нарушения чувствительности кожи в области верхних или нижних конечностей?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас снижение мышечной силы в руках?',
                            ans: 0
                        },
                        {
                            text: 'Бывают ли у Вас головные боли в затылочной области?',
                            ans: 0
                        },
                        {
                            text: 'Бывает ли у Вас чувство онемения кожи, и "ползания мушек" в затылочной области головы?',
                            ans: 0
                        }],
                    res: 0,
                    resClass: 'success'
                }
            ]
        }
    },
    mounted(){

        setTimeout(function(){
            var preloader = document.getElementById('preloader');
            preloader.style.display = 'none';   
        }, 1000);
        
    },
    methods: {
        showList(){
            this.startShow = false;
            this.listShow = true;
        },
        closeList(){
            this.startShow = true;
            this.listShow = false;
        },
        showTest(index){
            this.currentTest = this.systems[index];
            this.currentIndex = index;
            $('#testModal').modal('show');
        },
        showInfo(){
            $('#infoModal').modal('show');
        },
        showCon(){
            $('#conModal').modal('show');
        },
        showVideo(){
            $('#modal-fullscreen').modal('show');
            this.url = 'https://www.youtube.com/embed/-P_bjq62Bfo';
        },
        closeVideo(){
            $('#modal-fullscreen').modal('hide');
            this.url = '';
        },
        calcRes(){
            
            var summ = 0;

            for( item in this.systems[this.currentIndex].data ){

                summ += parseInt(this.systems[this.currentIndex].data[item].ans); 

            }
            
            this.systems[this.currentIndex].res = summ;

            if(summ<=5){
                this.systems[this.currentIndex].resClass = 'success';
            }
            if(summ>5 && summ <=10){
                this.systems[this.currentIndex].resClass = 'warning';
            }
            if(summ>10){
                this.systems[this.currentIndex].resClass = 'danger';
            }

        },
        showChart(){

            $('#chartModal').modal('show');

            var data = [];

            for( item in this.systems ){
                
                if(this.systems[item].sex == 0 || this.systems[item].sex == this.sex){

                    data.push({
                        x: this.systems[item].name,
                        y: (this.systems[item].res==0)?1:this.systems[item].res, 
                    });

                }

            }

            var options = {
            series: [
            {
                data: data
            }
            ],
            legend: {
            show: true
            },
            chart: {
            height: 500,
            type: 'treemap'
            },
            title: {
            text: 'Диаграмма здоровья'
            },
            plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                colorScale: {
                ranges: [
                    {
                    from: 0,
                    to: 5,
                    color: '#06ba0c'
                    },
                    {
                    from: 6,
                    to: 10,
                    color: '#f5ee0b'
                    },
                    {
                    from: 11,
                    to: 20,
                    color: '#ff0800'
                    }
                ]
                }
            }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        }
    }
}).mount('#app');