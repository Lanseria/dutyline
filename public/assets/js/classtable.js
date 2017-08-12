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
  var name = $('#dutyname').val();
  var num = $('#dutynum').val();
  var tel = $('#dutytel').val();
  var dept = $('#dutydept').val();
  var filename = $('#filename').val();
  var type = $('#type').val();
  if(table==''||name==''||num==''||tel==''||dept==''||filename==''){
    alert('请输入相应的信息以及表格信息');
  }else{
    var data = {
      name: name,
      num: num,
      tel: tel,
      dept: dept,
      filename: filename,
      type: type
    }
    $.post('', {data}, function(res){
      console.log(res);
      if(res=='success'){
        window.location.href="/?res=1"; 
      }
    })
  }
})
function uploadFile(obj){
  var that = $(obj);
  console.log(that);
  var filePath = that.val();
  if(filePath.indexOf('xlsx')==-1||filePath.indexOf('xls')==-1){
    alert('必须上传xlsx格式或xls表格');
    return false;
  }
  $.ajaxFileUpload({
    url: '/uploadPost',
    secureuri: false,
    fileElementId: 'uploadPoster',
    dataType: 'json',
    success: function(data){
      console.log(data);
      $('#filename').val(data.fname);
      $('#type').val(data.type);
    },
    error: function(data){
      console.log('server is error');
    }
  })
  return false;
}      
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
