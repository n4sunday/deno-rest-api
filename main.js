import { Application, Router } from "https://deno.land/x/oak/mod.ts"

const env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = env.HOST || "127.0.0.1"

let movies = [
    {
        rank: 1,
        title: 'Avengers: Endgame',
        distributor: 'Disney',
        domestic_gross: '$858,373,000'
    },
    {
        rank: 2,
        title: 'The Lion King',
        distributor: 'Disney',
        domestic_gross: '$543,638,043'
    },
    {
        rank: 3,
        title: 'Star Wars: The Rise of Skywalker',
        distributor: 'Disney',
        domestic_gross: '$515,192,185'
    },
    {
        rank: 4,
        title: 'Frozen II',
        distributor: 'Disney',
        domestic_gross: '$477,368,818'
    },
    {
        rank: 5,
        title: 'Toy Story 4',
        distributor: 'Disney',
        domestic_gross: '$434,038,008'
    },
    {
        rank: 6,
        title: 'Captain Marvel',
        distributor: 'Disney',
        domestic_gross: '$426,829,839'
    },
    {
        rank: 7,
        title: 'Spider-Man: Far From Home',
        distributor: 'Sony',
        domestic_gross: '$390,532,085'
    },
    {
        rank: 8,
        title: 'Aladdin',
        distributor: 'Disney',
        domestic_gross: '$355,559,216'
    },
    {
        rank: 9,
        title: 'Joker',
        distributor: 'Warner Bros.',
        domestic_gross: '$335,448,104'
    },
    {
        rank: 10,
        title: 'Jumanji: The Next Level',
        distributor: 'Sony',
        domestic_gross: '$316,783,803'
    },


]

export const getMovies = ({ response }) => response.body = movies
export const getMovie = ({ params, response, }) => {
    console.log("req params : ", params);
    const movie = movies.filter((movie) => movie.title.toLowerCase() === params.title.toLowerCase())
    if (movie.length) {
        response.status = 200
        console.log("res : ", movie[0])
        response.body = movie[0]
        return
    }

    response.status = 400
    response.body = { message: `Cannot find title ${params.title}` }
}
export const addMovie = async ({ request, response }) => {
    const body = await request.body()
    console.log("req body : ", body)
    const movie = body.value
    movies.push(movie)
    response.status = 200
    response.body = {
        message: "add success",
        movies
    }
}
export const updateMovie = async ({ params, request, response }) => {
    console.log("req params : ", params);
    const temp = movies.filter(movie => movie.rank.toString() === params.rank.toString())
    const body = await request.body()
    console.log("req body : ", body)
    const { title, distributor, domestic_gross } = body.value
    if (temp.length) {
        temp[0].title = title ? title : temp[0].title
        temp[0].distributor = distributor ? distributor : temp[0].distributor
        temp[0].domestic_gross = domestic_gross ? domestic_gross : temp[0].domestic_gross
        response.status = 200
        response.body = {
            message: "update success",
            movie: temp[0]
        }
        return
    }
    response.status = 400
    response.body = response.body = { message: `Cannot find rank ${params.rank}` }

}

const router = new Router();
router
    .get('/movies', getMovies)
    .get('/movies/:title', getMovie)
    .post('/movies', addMovie)
    .put('/movies/:rank', updateMovie)
// .delete('/movies/:name', removeMovie)

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)
