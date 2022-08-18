Expenditure=[
    Bill1 = {
          paid_A : 1000,
          paid_B : 2000,
          paid_C : 1000
    },
    Bill2 = {
          paid_A : 300,
          paid_B : 400,
          paid_C : 100,
          paid_D : 200   
    },
    Bill3 = {
          paid_A : 3000,
          paid_B : 100,
          //paid_C : 150,
          paid_D : 200
    }
  ]
  console.log('Expenditure:',Expenditure)
  // ----------------------------------------------------------------------------------------------------------------------------
  
      function total(Obj){
          sumn=0
          count=0
          for(a in Obj){
               sumn += Obj[a]
              count++   
          }
          return sumn
      }
      
  
      function average(Obj){
          total(Obj)
          // console.log(count);
          avg = sumn/count
          return avg   
      }
  
  console.log(" ----------------------------------------------------------------------------------------------------------- ")

    settlement = {}
    persontoget={}
    persontopay={}
  // ----------------------------------------------------------------------------------------------------------------------------
  
  //Paid amount of the user in each bill
  const paidbyUser=(Obj)=>{
      average(Obj)                              // Average Function
      s={}
      for(i in Obj){
        s[i] = Obj[i] - avg
      }
      return s
    }
  
  //--------------------------------------------------------------------------------------------------------------------------
  
  // Paid by each Bill
    for(j in Expenditure){
        Expenditure[j]=paidbyUser(Expenditure[j])
    }
 // ----------------------------------------------------------------------------------------------------------------------------
  
 //  settlement={}          //Settlement Object
      for(k in Expenditure){ 
        for(l in Expenditure[k]){
          if(l in settlement){
            settlement[l]=settlement[l] + Expenditure[k][l]
          }
          else{
            settlement[l]=Expenditure[k][l]
          }
        }
      }
      console.log('settlement:',settlement);
  
  // -----------------------------------------------------------------------------------------------------------------------------
            
  for(m in settlement){
  if(settlement[m]==0){
      console.log(m + " No Need to pay")
  }
  else if(settlement[m]<0){
      persontopay[m] = settlement[m]
  }
  else if(settlement[m]>0){
      persontoget[m] = settlement[m]
  }
}
    console.log('Persontopay:' , persontopay)
    console.log('Persontoget:' ,  persontoget)
  
  console.log(" ----------------------------------------------------------------------------------------------------------- ")
  
   //Sorting in ascending order
    const sort_asc = (Obj) => {
          arr3 = []
          asc = {}
          for(j in Obj){
              arr3.push(Obj[j])
          }
          function srt(a,b){
              return a-b
          }
          arr3.sort(srt)
          
          for(k of arr3){
             for(l in Obj){
                if(k == Obj[l]){
                    asc[l] = Obj[l]
                }
             }
            }
          return asc
    }
      
      
    // Sorting in descending order
      const sort_des = (Obj) => {
          arr4 = []
          des = {}
          for (m in Obj){
                 arr4.push(Obj[m]) 
          }
          
          function srt1(a,b){
                 return a-b
          }
          arr4.sort(srt1)
          arr4.reverse()
          
          for(n of arr4){
             for(o in Obj){
               if(n == Obj[o]){
                  des[o] = Obj[o]
               }
             }
          }
          return des
      }
      
      sorted_persontopay = sort_asc(persontopay)
      sorted_persontoget = sort_des(persontoget)
      console.log('persontopay: ', sorted_persontopay)
      console.log("persontoget: ", sorted_persontoget)
  
   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      
  // Remove Zero function
      function removezero(Obj){
           e={}
           for( p in Obj){
          if(Obj[p] != 0){
                 e[p] = Obj[p]
          }
            }
            return e
      } 
  
  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Final Settlements
  
    for(p in persontopay){
        for(r in persontoget){
            if(persontoget[r] > Math.abs(persontopay[p])){
                console.log(`${p} has to pay Rs.${Math.abs(persontopay[p]).toFixed(2)} to ${r}`)
                persontoget[r] = (persontoget[r])-(Math.abs(persontopay[p]))
                persontopay[p] = 0
                persontopay = removezero(persontopay)
                persontoget = removezero(persontoget)
            }
            else if(persontoget[r] < Math.abs(persontopay[p])){
                console.log(`${p} has to pay Rs.${Math.abs(persontoget[r]).toFixed(2)} to ${r}`)
                persontopay[p] = (persontoget[r]) - Math.abs(persontopay[p])
                persontoget[r] = 0
                persontoget = removezero(persontoget)
                persontopay = removezero(persontopay)           
            }
            else if(persontoget[r]==Math.abs(persontopay[p])){
                console.log(`${p} has to pay Rs.${Math.abs(persontopay[p]).toFixed(2)} to ${r}`)
                persontoget[r]   = 0
                persontopay[p] = 0
                persontoget   = removezero(persontoget)
                persontopay = removezero(persontopay)
            }
        }
    }