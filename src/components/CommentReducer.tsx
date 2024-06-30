export interface Comment {
    id: number;
    user: string;
    time: string;
    content: string;
    likes: number;

}

export const initialComments: Comment[] = [
        {
            id: 1,
            user: 'John Doe',
            time: '1 hour ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget sapien porttitor maximus.',
            likes: 12
        }
];

type Action = 
  { type: 'ADD_COMMENT', payload: Comment }
| { type: 'LIKE_COMMENT', payload: number };


const CommentReducer = (state: Comment[], action: Action): Comment[] => {
        switch(action.type){
            case 'ADD_COMMENT':
                return [...state, action.payload]
            case 'LIKE_COMMENT':
                return state.map((comment) => 
                    comment.id === action.payload ? {...comment, likes: comment.likes + 1}
                    : comment
                )
            default:
                return state
        }
    }
  
  


export default CommentReducer
