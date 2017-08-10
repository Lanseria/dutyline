(function(){
  var panel = document.querySelector('#table');
  var table = document.createElement('table');
  table.setAttribute("class", "table table-condensed table-hover table-responsive");
  var thead = document.createElement('thead');
  thead.innerHTML = `<tr>
                        <th>#</th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                      </tr>`;
  table.appendChild(thead);
  var tbody = document.createElement('tbody');
  const rows = 5, cols = 8;
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var th = document.createElement('th');
  init_tr_td();
  panel.appendChild(table);
  function init_tr_td(){
    
    for(let j = 0; j<rows; j++){
      var tr = document.createElement('tr');
      for(let i = 0; i<cols;i++){
        var td = document.createElement('td');
        var th = document.createElement('th');
        td.innerHTML = `<label class='checkbox' for='checkbox${j}${i}'>
                          <input id='checkbox${j}${i}' type='checkbox' value='' data-toggle='checkbox'/>
                        </label>`;
        th.setAttribute('scope', 'row');
        th.innerText = j;
        if(i==0){
          tr.appendChild(th);
        }else{
          tr.appendChild(td);
        }
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  }
})();
$('#submit').on('click', function(){
  var table = $('table');
  console.log(table);
  var name = $('#dutyname').val();
  var num = $('#dutynum').val();
  var tel = $('#dutytel').val();
  var dept = $('#dutydept').val();
  var data = {
    name: name,
    num: num,
    tel: tel,
    dept: dept
  }
  var xlsx = $('#upload').files[0];
  var fm = new FormData();
  fm.append('data', data);
  fm.append('xlsx', xlsx);

  var request = new XMLHttpRequest();
  request.open('post', '');
  request.send(fm);
})          
/*.table.table-condensed.table-hover.table-responsive
thead
  tr
    th #
    th 星期一
    th 星期二
    th 星期三
    th 星期四
    th 星期五
    th 星期六
    th 星期日
tbody
  tr
    th(scope="row") 1
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
      
  tr
    th(scope="row") 2
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
      
  tr
    th(scope="row") 3
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
      
  tr
    th(scope="row") 4
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
      
  tr
    th(scope="row") 5
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
    td
      label.checkbox(for='checkbox1')
        input#checkbox1(type='checkbox', value='', data-toggle='checkbox')
        | 
        */
