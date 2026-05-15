// Дочірній компонент картки курсу
export default {
    name: 'CourseCard',
    
    props: {
        course: {
            type: Object,
            required: true,
            validator: (value) => {
                return value.hasOwnProperty('id') && 
                       value.hasOwnProperty('title') && 
                       value.hasOwnProperty('category');
            }
        }
    },
    
    computed: {
        levelClass() {
            const level = this.course.level;
            if (level === 'Початковий') return 'beginner';
            if (level === 'Середній') return 'intermediate';
            return 'advanced';
        },
        
        levelIcon() {
            const level = this.course.level;
            if (level === 'Початковий') return '🌱';
            if (level === 'Середній') return '📚';
            return '🏆';
        }
    },
    
    methods: {
        viewDetails() {
            this.$emit('view-details', this.course);
        }
    },
    
    template: `
        <div class="course-card" @click="viewDetails">
            <h3>📚 {{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <div class="course-details">
                <span>📁 {{ course.category }}</span>
                <span>⭐ {{ levelIcon }} {{ course.level }}</span>
                <span>⏱️ {{ course.duration }}</span>
            </div>
        </div>
    `
};