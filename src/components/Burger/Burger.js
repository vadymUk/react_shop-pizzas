import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
    position: absolute;
    top: 25%;
    right: 7rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    &:focus {
        outline: none;
    }
    @media (max-width: 700px) {
        display: flex;
    }
    @media (max-width: 370px) {
        right: 6rem;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => (open ? "#fff" : "#EFFFFA")};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        &:first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) =>
                open ? "translateX(20px)" : "translateX(0)"};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
