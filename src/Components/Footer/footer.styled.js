import styled from 'styled-components';



export const StyleFooter= styled.footer`
.footer{
    text-align: center;
    display: flex;
    flex-direction: row wrap;
    background-color: ${({ theme }) => theme.darkGreen};
    height: auto;
    color: ${({ theme }) => theme.pink};
    padding: 3rem;
    font-size:1.5rem;
    z-index: 2;
    bottom: 0;
}
img{
    width: 100%;
    margin:0;
    margin-bottom: -1rem;
}

.social-media{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    vertical-align: baseline;
    color: ${({ theme }) => theme.pink};
   .social-media-link{
       display: inline-block;
       margin:5px;
       i{
        padding:10px;
        background-color:${({ theme }) => theme.darkPink};
        width:40px;
        height:40px;
        margin:0 auto;
        color:${({ theme }) => theme.darkGreen};
        border-radius: 100%;
       }
       i:hover{
           transform: scale(1.1);
           transition:.15s;
       }
   }
}
@media only screen and (max-width: 768px) {
   
    @media only screen and (max-width: 1280px) {
    } 
     
`;
