import styled from '@emotion/styled';

export const LobbiesListStyles = {
  Lobbies: styled.div`
    max-width: 800px;
  `,
  LobbyHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
  `,
  PlayersList: styled.ul`
    display: flex;
    flex-wrap: wrap;
  `,
  PlayersSection: styled.div`
    display: flex;
  `,
  CurrentPlayer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 1.25rem;
  `,
  PlayersItem: styled.li`
    display: flex;
    flex: 20%;
    flex-direction: column;
    align-items: center;
  `,
};
