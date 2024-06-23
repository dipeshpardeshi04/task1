import PageCard from '../pagecards.js'
import IconPeople from './peoplei'
import IconPlace from './placei'
import IconProduct from './producti'
import IconProgram from './programi'
import './pagess.css'

const pagesData = [
    {
        title: 'People',
        desc: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
        buttonText: 'Connect',
        theme: '#8064A2',
        icon: <IconPeople />
    },
    {
        title: 'Place',
        desc: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
        buttonText: 'Meet up',
        theme: '#77933C',
        icon: <IconPlace />
    },
    {
        title: 'Product',
        desc: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
        buttonText: 'Get it',
        theme: '#C0504D',
        icon: <IconProduct />
    },
    {
        title: 'Program',
        desc: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
        buttonText: 'Attend',
        theme: '#0096C8',
        icon: <IconProgram />
    }
]
function Pages() {
  return (
    <section className='pages d-flex'>
        {
            pagesData.map(( pro, idx ) => {
                return (
                    <PageCard title={pro.title} desc={pro.desc} buttonText={pro.buttonText} theme={pro.theme} icon={pro.icon} key={idx}/>
                )
            })
        }
    </section>
  )
}

export default Pages