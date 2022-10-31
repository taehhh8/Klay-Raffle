import {raffleV1Contract} from "../../caverConfig";


function myTicketAmountAct(account) {
    return async (dispatch) => {
        try {
              const response = await raffleV1Contract.methods.getInvestAmount(account).call();
              const myTicketAmount = response

              dispatch({type: "GET_MYTICKETAMOUNT", 
                payload : {
                    myTicketAmount : myTicketAmount
                  }})
          } catch (error){
            console.error(error);
          }
    }
}

export const myTicketAmountAction = {myTicketAmountAct}