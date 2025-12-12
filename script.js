document.addEventListener('DOMContentLoaded', function() {
    // ===== ДАННЫЕ ДЛЯ САЙТА =====
    const mastersData = [
        { name: 'Сабина Абдулбасырова', position: 'Стилист-парикмахер' },
        { name: 'Зульфия Раджабова', position: 'Стилист-парикмахер' },
        { name: 'Сунна Нуралиева', position: 'Нейлист' }
    ];

    const servicesData = {
        nails: [
            {
                category: 'Маникюр',
                items: [
                    { name: 'СПА-маникюр La Ric', description: 'Красивое действо и уникальная концепция, выдержанная в одном стиле с применением морской ракушки.', price: '3800' },
                    { name: 'СПА-маникюр Davines', description: 'Гармония ухода и увлажнения, дарящая коже мягкость, свежесть и комфорт.', price: '2600' },
                    { name: 'СПА-маникюр Babor', description: 'Мягкий уход, который дарит коже увлажнение, естественную свежесть.', price: '2900' },
                    { name: 'MAN маникюр Elemis', description: '', price: '3600' },
                    { name: 'Маникюр классический / пилочный', description: '', price: '1000 / 1200' },
                    { name: 'СПА-маникюр Laura Mercier', description: '', price: '3400' },
                    { name: 'СПА-маникюр ST BARTH', description: '', price: '3300' }
                ]
            },
            {
                category: 'Педикюр',
                items: [
                    { name: 'СПА-педикюр Oribe', description: 'Изысканность, роскошь и телепортация к средиземноморскому побережью через парфюмерные ассоциации.', price: '4600' },
                    { name: 'СПА-педикюр Davines', description: '', price: '3400' },
                    { name: 'СПА-педикюр Babor', description: '', price: '3600' },
                    { name: 'MAN педикюр Elemis', description: '', price: '4600' },
                    { name: 'Педикюр классический / пилочный', description: '', price: '1600 / 1800' },
                    { name: 'СПА-педикюр Laura Mercier', description: '', price: '4400' },
                    { name: 'СПА-педикюр ST BARTH', description: '', price: '4100' }
                ]
            },
            {
                category: 'Покрытие',
                items: [
                    { name: 'Покрытие гель-лак', description: 'Не может быть самостоятельной услугой.', price: '1500' },
                    { name: 'Покрытие лак', description: 'Не может быть самостоятельной услугой.', price: '900' },
                    { name: 'Дизайн', description: '', price: '100 / 200 / 500' },
                    { name: 'Снятие гель-лака / геля', description: 'Не может быть самостоятельной услугой.', price: '300 / 600' },
                    { name: 'Ремонт ногтя', description: '', price: '200' }
                ]
            }
        ],
        stylists: [
            {
                category: 'УКЛАДКА',
                items: [
                    { name: 'Укладка повседневная (короткие / средней длины / длинные)', description: 'Нехитрая манипуляция в ежедневной рутине, но ощутимый плюс в женском самоощущении и настроении.', price: '2900 / 3500' },
                    { name: 'Создание локонов (короткие / средней длины / длинные)', description: 'Универсальный, роскошный и всегда беспроигрышный способ подчеркнуть ваше природное очарование.', price: '3200 / 3500 / 4300' }
                ]
            },
            {
                category: 'ОКРАШИВАНИЕ',
                items: [
                    { name: 'Окрашивание прикорневой зоны и коротких волос Kydra', description: 'Краска наносится лишь на прикорневую зону, не затрагивая остальную часть волос и концы. Для закрашивания седины и придания более насыщенного оттенка.', price: '6200' },
                    { name: 'Окрашивание в один тон Kydra (короткие / средней длины / длинные)', description: 'Для получения стойкого, однородного и равномерного оттенка. От поддержания насыщенности цвета до кардинальной смены образа.', price: '6800 / 9500 / 11700' },
                    { name: 'Сложная техника окрашивания Kydra (короткие / средней длины / длинные)', description: 'Техника с использованием нескольких плавно растягивающихся оттенков краски. Возможны мелирование и колорирование.', price: '13700 / 119900 / 25200' },
                    { name: 'Декапирование, смывка цвета Kydra (в 1 этап / в 2 этапа)', description: 'План отступления, кнопка «отмены» и просто процесс, обратный окрашиванию стойкими красками.', price: '3300 / 4800' },
                    { name: 'Осветление прикорневой зоны и коротких волос Kydra', description: 'Маскировка отросших корней, позволяющая скрыть их и не проводить окрашивание прядей по всей длине.', price: '6400' },
                    { name: 'Осветление Kydra (средней длины / длинные)', description: '', price: '7100 / 8500' },
                    { name: 'Тонирование Kydra', description: 'Облегчённое окрашивание, при котором вещества не проникают вглубь структуры волоса. Таким образом, оно не истощает локоны, а оздоравливает, улучшая цвет.', price: '4800 / 5800/ 6900' },
                    { name: 'Тонирующий уход для волос Kydra Sweet Color', description: 'Максимально бережное окрашивание с полезным для волос маслом манго и натуральными растительными пигментами.', price: '4700' },
                    { name: 'Блики солнца Sun Touch Kydra', description: 'Инновационная технология на основе безаммиачного масла, дающая эффект выгоревших на солнце волос.', price: '8100' }
                ]
            },
            {
                category: 'УХОД ДЛЯ ВОЛОС',
                items: [
                    { name: 'Уход Oribe Преображение и роскошь (короткие / средней длины / длинные)', description: '', price: '3900 / 4200 / 4900' },
                    { name: 'Абсолютное счастье для волос Lebel (короткие / средней длины / длинные)', description: 'Восстановление и увлажнение на молекулярном уровне. Сыворотки и кремы восполняют нехватку нужных веществ в волосах и коже головы.', price: '3900 / 5100 / 7200' },
                    { name: 'Экспресс-уход Nashi Argan (короткие / средней длины / длинные)', description: 'Ускоренный вариант ухода от знаменитого итальянского бренда. Глубоко питает и увлажняет волосы.', price: '3200 / 3500 / 4200' },
                    { name: 'Уход Kevin Murphy (короткие / средней длины / длинные)', description: 'Натуральные составы уходов без сульфатов и парабенов, для волос всех типов и состояний.', price: '3800 / 4300 / 5300' },
                    { name: 'Система глубокого восстановления волос Tokio Inkarami (короткие / средней длины / длинные)', description: 'Единственная в мире система, позволяющая полностью восстановить структуру волос вплоть до самых глубоких слоев.', price: '9300 / 11700 / 14500' },
                    { name: 'Пятинедельный уход Balmain Hair Couture', description: '', price: '4500/ 5290/ 5900' },
                    { name: 'Детокс-уход для глубокого очищения Davines', description: '', price: '3500' },
                    { name: 'Уход Oribe Преображение и роскошь', description: '', price: '3900 / 4200 / 4900' },
                    { name: 'Уход Advante', description: '', price: '5900 / 6900 / 7900' }
                ]
            },
            {
                category: 'СТРИЖКА',
                items: [
                    { name: 'Женская', description: '', price: '3600' },
                    { name: 'Оформление челки', description: '', price: '900' },
                    { name: 'Cтрижка контурной линии', description: '', price: '3000' },
                    { name: 'Детская (до 12 лет)', description: '', price: '1700' }
                ]
            }
        ]
    };

    // ===== ОСНОВНЫЕ ЭЛЕМЕНТЫ ДОМ =====
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const nailsContent = document.getElementById('nailsContent');
    const stylistsContent = document.getElementById('stylistsContent');
    const mastersGrid = document.querySelector('.masters-grid');

    // ===== УПРАВЛЕНИЕ МОБИЛЬНЫМ МЕНЮ =====
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Анимация кнопки гамбургера в крестик
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Возврат кнопки гамбургера в исходное состояние
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }

    menuToggle.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);

    // Закрытие меню при клике на ссылку
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ===== ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК УСЛУГ =====
    function switchTab(tabName) {
        // Обновляем активную кнопку
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });

        // Показываем соответствующий контент
        nailsContent.classList.remove('active');
        stylistsContent.classList.remove('active');

        if (tabName === 'nails') {
            nailsContent.classList.add('active');
            if (!nailsContent.hasChildNodes()) {
                renderServices('nails', nailsContent);
            }
        } else {
            stylistsContent.classList.add('active');
            if (!stylistsContent.hasChildNodes()) {
                renderServices('stylists', stylistsContent);
            }
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // ===== РЕНДЕРИНГ УСЛУГ =====
    function renderServices(serviceType, container) {
        const services = servicesData[serviceType];
        container.innerHTML = '';

        services.forEach(serviceCategory => {
            const table = document.createElement('table');
            table.className = 'service-table';

            const caption = document.createElement('caption');
            caption.textContent = serviceCategory.category;
            table.appendChild(caption);

            const tbody = document.createElement('tbody');

            serviceCategory.items.forEach(item => {
                const row = document.createElement('tr');

                const th = document.createElement('th');
                th.innerHTML = `<strong>${item.name}</strong>`;
                if (item.description) {
                    th.innerHTML += `<br><span style="font-weight:300;font-size:0.9em;color:#666;">${item.description}</span>`;
                }
                row.appendChild(th);

                const td = document.createElement('td');
                td.textContent = item.price;
                row.appendChild(td);

                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            container.appendChild(table);
        });
    }

    // ===== РЕНДЕРИНГ КАРТОЧЕК МАСТЕРОВ =====
    function renderMasters() {
        mastersGrid.innerHTML = '';
        mastersData.forEach(master => {
            const card = document.createElement('div');
            card.className = 'master-card';

            // Заглушка для изображения (на реальном сайте здесь будет <img src="...">)
            const imagePlaceholder = document.createElement('div');
            imagePlaceholder.className = 'master-image';
            // Можно добавить фоновый цвет или иконку
            imagePlaceholder.style.backgroundColor = '#f0f0f0';
            imagePlaceholder.style.display = 'flex';
            imagePlaceholder.style.alignItems = 'center';
            imagePlaceholder.style.justifyContent = 'center';
            imagePlaceholder.innerHTML = '<i class="fas fa-user" style="font-size:48px;color:#ccc;"></i>';

            const name = document.createElement('h3');
            name.className = 'master-name';
            name.textContent = master.name;

            const position = document.createElement('p');
            position.className = 'master-position';
            position.textContent = master.position;

            card.appendChild(imagePlaceholder);
            card.appendChild(name);
            card.appendChild(position);

            mastersGrid.appendChild(card);
        });
    }

    // ===== ПЛАВНАЯ ПРОКРУТКА ПРИ КЛИКЕ НА ССЫЛКИ =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ИНИЦИАЛИЗАЦИЯ САЙТА ПРИ ЗАГРУЗКЕ =====
    function initSite() {
        // Показываем первую вкладку услуг
        renderServices('nails', nailsContent);
        // Рендерим карточки мастеров
        renderMasters();
        // Активируем первую вкладку
        switchTab('nails');
    }

    // Запуск инициализации
    initSite();
});