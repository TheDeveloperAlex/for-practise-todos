import styled from 'styled-components';

export const Wrapper = styled.div`
    /* background-color: ${({color}) => color}; */
    /* body {
        background-color: ${({color}) => color};
    } */
    .taskList {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .taskListItem {
        /* border: 1px solid green; */
        background-color: rgba(107, 140, 202, 0.22);
        border-radius: 10px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
    }

    .checkbox {
        width: 50px;
        height: 50px;
        background-color: white;
    }

    .titleWrapper {
        display: flex;
    }

    .cross {
        text-decoration: line-through;
    }

    .buttonCustom {
        background-color: transparent;
        padding: 0;
        margin: 0;
        border: none;
        cursor: pointer;
    }

    /* .buttonCustom:hover {
        background-color: transparent;
    } */

    .createTaskBtn {
        background-color: red;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .createTaskBtnIcon {
        font-size: 30px;
    }

    .deleteTaskBtnWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none !important;

       
    }
    .deleteTaskBtn {
        /* background-color: red;
        border-radius: 50%; */
        /* width: 20px;
        height: 20px; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        text-decoration: none !important;
        

        
        
    }
    
    .deleteTaskBtnIcon {
        font-size: 20px;
         text-decoration: none !important;
        
    }


    
`