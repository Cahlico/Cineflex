import styled from 'styled-components';

export const TicketsPage = styled.div`
    position: absolute;
    height: 100vh;
    width: 70vw;
    top: 0;
    right: ${(props) => props.openTickets ? '0' : '-70vw'};
    background-color: #f5f5f5;
    z-index: 1;
    padding: 80px 20px;
    transition: .4s ease-in-out;

    h2 {
        font-size: 22px;
        font-weight: bold;
    }

    span {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
    }

    ion-icon {
        color: #e3364d;
        font-size: 22px;
    }

    @media (min-width: 601px) {
        left: 43vw;

        ion-icon {
            margin-right: 21%;
        }

        button {
            position: absolute;
            right: 7vw;
        }
    }
`;

export const TicketsFilm = styled.div`
    position: absolute;
    height: 100vh;
    width: 30vw;
    top: 0;
    left: ${(props) => props.openTickets ? '0' : '-30vw'};;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
    transition: .4s ease-in-out;
`;