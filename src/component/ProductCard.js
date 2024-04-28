import React from 'react';
import { useNavigate } from "react-router-dom"
import styled from 'styled-components';
const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    
    const showDetail = () => {
        navigate(`/product/${item.id}`)
        
    }
    return (
        <Card onClick={() => {showDetail(item?.id)}} >
            <div className="photo-img">
                <img src={item?.img} alt='' />
            </div>
            <div className="text-item">
                <Text $mb={"10px"}>{item?.choice ? "Conscious choice" : ""}</Text>
                <p className="title">{item?.title}</p>
                <div className="bottom">
                    <p className="price">$ <span>{item?.price}</span></p>
                    <Text>{item?.new ? "신제품" : ""}</Text>
                </div>
            </div>
            
            

        </Card>
    );
};

export default ProductCard;


const Card = styled.div`
    cursor: pointer;

    .photo-img {
        margin-bottom: 20px;
        height: auto;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            transition: 0.3s;
        }
    }

    .text-item{
        padding: 0 5px;
        .title {
            font-size: 1rem;
            font-weight : 600;
            margin-bottom: 10px;
            transition: 0.3s;
        }
        .title::hover {
            color : red;
        }

        .bottom {
            display: flex;
            justify-content: space-between;

            .price {
                font-size: 0.95rem;
                span {
                    font-weight: 600;
                }
            }
        }
    }

    &:hover .photo-img img {
        transform: scale(1.15);
    }
    &:hover .title {
        color: var(--base-active);
    }
`;

const Text = styled.p`
    font-size: 0.8rem;
    color: var(--text-hlight);
    animation: blink 2s step-end infinite;
    margin-bottom: ${props => props.$mb ? props.$mb : 0};


    @keyframes blink {
        50% {
            color: var(--text-light);
        }
    }
`;