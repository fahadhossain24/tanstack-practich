import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Posts = () => {

    const { data, isLoading, error } = useQuery({queryKey: ['posts'], queryFn: async() => {
        const res =  await axios.get('/posts.json');
        return res.data
    }});


    if(isLoading) <p>Loading...</p>
    if(error) <p>{error.message}</p>

    return (
        <div>
            {
                data?.map(post => <p key={post.id}>{post.title}</p>)
            }
        </div>
    );
};

export default Posts;