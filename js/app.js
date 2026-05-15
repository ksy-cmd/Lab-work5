// Імпорт компонента CourseCard
import CourseCard from '../components/CourseCard.js';

// Дані про курси
const coursesData = [
    { id: 1, title: "JavaScript для початківців", category: "Web-розробка", level: "Початковий", duration: "8 тижнів", description: "Основи JavaScript, змінні, функції, події, DOM маніпуляції." },
    { id: 2, title: "React - сучасний підхід", category: "Web-розробка", level: "Середній", duration: "10 тижнів", description: "Компоненти, хуки, state management, роутинг." },
    { id: 3, title: "CSS Grid та Flexbox", category: "Web-розробка", level: "Початковий", duration: "4 тижні", description: "Сучасна верстка адаптивних сайтів." },
    { id: 4, title: "TypeScript у проєктах", category: "Web-розробка", level: "Просунутий", duration: "6 тижнів", description: "Типізація, інтерфейси, компіляція." },
    { id: 5, title: "UI/UX дизайн для розробників", category: "Дизайн", level: "Початковий", duration: "6 тижнів", description: "Принципи дизайну, прототипування, Figma." },
    { id: 6, title: "Анімація у веб-інтерфейсах", category: "Дизайн", level: "Середній", duration: "4 тижні", description: "CSS-анімації, transitions, ключові кадри." },
    { id: 7, title: "Python для Data Science", category: "Data Science", level: "Початковий", duration: "12 тижнів", description: "NumPy, Pandas, візуалізація даних." },
    { id: 8, title: "Машинне навчання", category: "Data Science", level: "Просунутий", duration: "14 тижнів", description: "Scikit-learn, нейронні мережі, TensorFlow." },
    { id: 9, title: "SQL для аналітиків", category: "Data Science", level: "Початковий", duration: "5 тижнів", description: "Запити, JOIN, агрегація, оптимізація." },
    { id: 10, title: "Node.js та Express", category: "Web-розробка", level: "Середній", duration: "8 тижнів", description: "Бекенд розробка, REST API, MongoDB." },
    { id: 11, title: "Figma від А до Я", category: "Дизайн", level: "Початковий", duration: "4 тижні", description: "Інтерфейс, компоненти, прототипи, спільна робота." },
    { id: 12, title: "Основи HTML5", category: "Web-розробка", level: "Початковий", duration: "3 тижні", description: "Семантична розмітка, форми, мультимедіа." }
];

// Дані для галереї
const galleryData = [
    { title: "Відкриття курсу Web-розробки", desc: "Більше 50 студентів долучилися" },
    { title: "Майстер-клас з UI/UX", desc: "Практичний воркшоп" },
    { title: "Хакатон 2025", desc: "Командні змагання" },
    { title: "Лекція Data Science", desc: "Вступ до ШІ" },
    { title: "Кар'єрний форум", desc: "Зустріч з роботодавцями" },
    { title: "Сертифікація", desc: "Вручення дипломів" },
    { title: "Онлайн-марафон", desc: "Тиждень інтенсивного навчання" },
    { title: "Круглий стіл", desc: "Обговорення технологій" },
    { title: "Випускний вечір", desc: "Святкування завершення" }
];

// Створення кореневого застосунку Vue
const app = Vue.createApp({
    data() {
        return {
            courses: coursesData,
            galleryItems: galleryData,
            searchQuery: '',
            selectedCategory: 'all',
            notification: '',
            notificationType: 'info'
        };
    },
    
    computed: {
        filteredCourses() {
            let result = this.courses;
            
            if (this.searchQuery.trim() !== '') {
                const query = this.searchQuery.toLowerCase().trim();
                result = result.filter(course => 
                    course.title.toLowerCase().includes(query) ||
                    course.category.toLowerCase().includes(query) ||
                    course.level.toLowerCase().includes(query) ||
                    course.description.toLowerCase().includes(query)
                );
            }
            
            if (this.selectedCategory !== 'all') {
                result = result.filter(course => course.category === this.selectedCategory);
            }
            
            return result;
        }
    },
    
    watch: {
        searchQuery(newVal, oldVal) {
            console.log(`Пошук змінено: "${oldVal}" → "${newVal}"`);
        },
        
        filteredCourses(newVal) {
            if (newVal.length === 0 && this.searchQuery !== '') {
                this.showNotification(`За запитом "${this.searchQuery}" нічого не знайдено`, 'warning');
            }
        }
    },
    
    methods: {
        handleViewDetails(course) {
            this.showNotification(`Обрано курс: ${course.title}`, 'success');
            console.log('Деталі курсу:', course);
        },
        
        showNotification(message, type = 'info') {
            this.notification = message;
            this.notificationType = type;
            
            setTimeout(() => {
                if (this.notification === message) {
                    this.clearNotification();
                }
            }, 3000);
        },
        
        clearNotification() {
            this.notification = '';
        },
        
        // Функція для правильного шляху до зображень галереї
        getImagePath(num) {
            const extensions = {
                4: 'png',
                8: 'png',
                9: 'png'
            };
            const ext = extensions[num] || 'jpg';
            return `images/gallery${num}.${ext}`;
        }
    },
    
    components: {
        'course-card': CourseCard
    }
});

app.mount('#app');

console.log('Lab5: Vue.js застосунок завантажено!');
console.log('Файли галереї: gallery1.jpg, gallery2.jpg, gallery3.jpg, gallery4.png, gallery5.jpg, gallery6.jpg, gallery7.jpg, gallery8.jpg, gallery9.png');