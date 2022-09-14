<?php 

$data = array(
    array(
        "id" => 1,
        "Company" => "A",
        "document" => "insurance.txt",
    ),
    array(
        "id" => 2,
        "Company" => "A",
        "document" => "letter.docx",
    ),
    array(
        "id" => 3,
        "Company" => "B",
        "document" => "Contract.docx",
    ),
);


function group_by($key, $data) {
  $result = array();

  foreach($data as $val) {
      if(array_key_exists($key, $val)){
          $result[$val[$key]][] = $val;
      }else{
          $result[""][] = $val;
      }
  }

  return $result;
}

$byGroup = group_by("Company", $data);
echo "<pre>" . var_export($byGroup, true) . "</pre>";

?>