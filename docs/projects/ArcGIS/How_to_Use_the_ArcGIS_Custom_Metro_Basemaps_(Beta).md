# How to Use the ArcGIS Custom Metro Basemaps (Beta)

Metro has been working to develop a custom ArcGIS basemap — and it’s finally here! The vision for this basemap is to bring greater consistency across Metro’s maps, from static printed maps to online interactive applications, for all types of project and service maps.

Our new custom basemap will improve efficiency in creating branded online and printed maps by streamlining the styling process, reducing the amount of manual work required to [style public-facing maps](https://www.dropbox.com/s/819q9y3ncffxxkn/21-2363_Project_Map_Style_Sheet_2021_May12.pdf?dl=0) to [Metro brand specifications](http://brand.metro.net).

**This base map is currently in** **beta** **version** **1.0.4** as of 6/23/21. It is available to select teams as Metro’s Design and Marketing teams refine the map and surrounding processes.

Metro’s ArcGIS Online environment includes shared update groups for individual projects and efforts, where files can be shared for collaboration with the Metro team. As with all public-facing information, please work with your Marketing Rep to gain access to the group for your project.

----------

**USE CASES**
The process for using the custom basemap will vary depending on the format of your final deliverable. Please follow instructions below based on the planned use for the map that you are developing. In some cases, you will have multiple uses and will need to follow both workflows for using this map.
****

## Online Maps

For online maps, select the custom Metro basemaps in the “Custom Basemaps” Gallery. There are two versions:

1. **With cartographic Rail and Busway Layer:** https://arcg.is/1OfD8H0

2. ***Without*** **cartographic Rail and Busway Layer:** https://arcg.is/1Cf5bj

## PDF/Printed/Detailed Maps

For maps appearing as PDFs, in print or that include more details and need to preserve vector resolution, please follow installation instructions below for use with ArcGIS Pro.

### 1. Instructions to Use the Basemap

**Step 1.1. Install correct fonts**
We are currently unable to distribute our Brand Typefaces, Information Design and Microsoft Office fonts to outside partners due to licensing restrictions.
[https://brand.metro.net/frequently-asked-questions/](https://brand.metro.net/frequently-asked-questions/)

****You must have the following fonts installed in order for them to display properly on the basemap. [https://brand.metro.net/downloads/](https://brand.metro.net/downloads/) (password: email [Tiffany Huang][tiffany-huang])

Font List:

- DIN Pro Regular
- DIN Pro Medium
- DIN Pro Medium Italic
- DIN Pro Bold
- DIN Pro Bold Italic
- DIN Pro Italic
- DIN Pro Condensed Black

**Step 1.2. Open Project Package in ArcGIS Pro**
The file is hosted on ArcGIS Online:
https://lametro.maps.arcgis.com/home/item.html?id=a52f5be4dc894c48804a383c05b909ba

![](https://paper-attachments.dropbox.com/s_215F0156F7DACE998841D053A078647E235E3C533F0C8A40D4778FD94B2BDD4A_1624040086399_image.png)
![](https://paper-attachments.dropbox.com/s_215F0156F7DACE998841D053A078647E235E3C533F0C8A40D4778FD94B2BDD4A_1624040390123_image.png)

**Step 1.3: Start using the basemap!**
Add your other layers; you have more flexibility in Pro to change layer ordering, etc.
For public-facing maps, please work with Marketing to review deliverables to finalize for release and distribution.

----------

**If** **your map requires** **the** **Metro Design Studio to assist with specialized styling needed to finalize it for a public-facing use, follow these instructions:**  ****

### 2. Instructions to Export to Illustrator

**From ArcGIS Pro**
From ArcGIS Pro, export an Illustrator compatible **.aix** file:
[https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/aix-export.htm](https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/aix-export.htm)
(Note: This requires the [ArcGIS Maps for Adobe Creative Cloud](https://links.esri.com/agol-help/m4cc/aix-files) extension to open the AIX file in Illustrator; see item [#3](https://paper.dropbox.com/doc/How-to-Use-the-ArcGIS-Custom-Metro-Basemaps--BM6Zs9F4195Ss6WK~Vcc8Tp1Ag-Be2QZfJXXMcAs7vr3D9IU#:uid=858638540131597640420833&h2=3.-Instructions-to-Use-in-Illu) below.)

- On the ‘Share’ tab, click the green arrow that says ‘Map’; Export’
![](https://paper-attachments.dropbox.com/s_215F0156F7DACE998841D053A078647E235E3C533F0C8A40D4778FD94B2BDD4A_1624046757076_image.png)

- Settings:
  - Select ‘AIX’ as ‘File Type’
  - Make sure to uncheck ‘Embed fonts’
![](https://paper-attachments.dropbox.com/s_215F0156F7DACE998841D053A078647E235E3C533F0C8A40D4778FD94B2BDD4A_1624046790233_image.png)
![](https://paper-attachments.dropbox.com/s_215F0156F7DACE998841D053A078647E235E3C533F0C8A40D4778FD94B2BDD4A_1624062345047_Screen+Shot+2021-06-18+at+5.23.50+PM.png)

- For more zoomed in scales with detailed street names, click to that view before exporting. 
- You can also add the map in a layout to further adjust the size and scale to export.

Note: maps can also be exported as a PDF.

**From ArcMap**
[+ArcGIS Reference for Map and Illustrator Compatible Exports](https://paper.dropbox.com/doc/ArcGIS-Reference-for-Map-and-Illustrator-Compatible-Exports-pQiPdEGc3IZ6veDC5XzYX) 

----------

### 3. Instructions to Use in Illustrator

**Step 1. Install the ArcGIS Maps for Adobe Creative Cloud Extension**
https://www.esri.com/en-us/arcgis/products/maps-for-adobecc/overview
****
******Step 2.** **Sign in to the** **LA Metro ArcGIS Online organization** **o****r** **ArcGIS Online** **organization partnered with LA Metro**
****
******Step 3. Open the .aix file from Illustrator**

----------

## Next Steps

This custom basemap is in beta, and we welcome your feedback. We’re also hoping to record trainings after more testing and feedback.

### Provide your feedback!

See something that could work better here? Or want to tell us about your experience using this map? Provide comments here: [+ArcGIS Custom Basemap — Beta User Comments](https://paper.dropbox.com/doc/ArcGIS-Custom-Basemap-Beta-User-Comments-bGqZEBJDUpehFGonN0h45) 

[ ] DCR has logged a known bug BUG-000140155 with Esri, on some names not showing up for small curved streets in Illustrator
[ ] DCR may log another bug for corrupted font symbols…. (testing for replication to determine need for bug log)

### Add Observed Edits

See something on the map that’s not correct? Please add notes to this log for future updates: [+ArcGIS Custom Metro Basemap – Edits Log](https://paper.dropbox.com/doc/ArcGIS-Custom-Metro-Basemap-Edits-Log-sdMzVAgnRPZd4RZkKrTSD) 

### Other Versions in Development

Metro is interested in building on this base map to further improve efficiency in creating public-facing maps. If you have ideas beyond those listed below, please add to the [+ArcGIS Custom Basemap — Beta User Comments](https://paper.dropbox.com/doc/ArcGIS-Custom-Basemap-Beta-User-Comments-bGqZEBJDUpehFGonN0h45) 

[ ] Explore a version with all building footprints when more zoomed in, that can be used for First/Last Mile, more detailed zoomed in views, etc.
[ ] Explore vector tile improvements with ArcGIS Pro v2.8
[ ] When ArcGIS Online supports more custom labels and cartography, perhaps the online map can use vector tile layers

----------

## Other References

### For CMYK maps in ArcGIS Pro

- Enable Project> Options> Color Management to change the display of colors. The default settings and it seems to improve the representation of CMYK.
![](https://paper-attachments.dropbox.com/s_AEC04767EAD9A01D3D25F2F6D40F733D073A137777BD46ACBF276FCBBF5B6750_1624056266917_color_mgmt.png)

### ArcGIS Pro

**Local Environment**
For setting up a local environment for ArcGIS Pro, this folder contains the necessary data and files: [https://drive.google.com/drive/folders/1lOuGFhkv2O6AQBpGKVj7MCkb-nDQ5be9?usp=sharing](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1lOuGFhkv2O6AQBpGKVj7MCkb-nDQ5be9%3Fusp%3Dsharing&data=04%7C01%7CHuangTi%40metro.net%7C50f060b8933f4ff25efc08d921fb96a9%7Cab57129bdbfd4cacaa77fc74c40364af%7C0%7C0%7C637578186742146337%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=fbYVsz0t81eZ2UFXx6uui4UZFchAu41P92MmXZ9WV9k%3D&reserved=0)

- Reference [Delivery Notes](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1juxdNZkkbSfftUJZ1KwIzl6NVkxOnI2x9oT_CqM_HR4%2Fedit%3Fusp%3Dsharing&data=04%7C01%7CHuangTi%40metro.net%7C50f060b8933f4ff25efc08d921fb96a9%7Cab57129bdbfd4cacaa77fc74c40364af%7C0%7C0%7C637578186742156223%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=h3J3Iq%2FvbJpVUjzzZ3jagqt3CuGn7wbhQoLVVL5YTFk%3D&reserved=0) – this doc details the contents and installation steps for a local environment

### Other Reference Maps

**Former Draft Vector Basemap:**
(For online maps)
****https://arcg.is/0OSTGW1

**Custom Metro Basemap with non-cartographic, interim Rail and Busway Layer:**
(For online maps)
****https://arcg.is/WXCHG

### Styling

**Project Styling Notes**
[+ArcGIS Map Styling – Projects](https://paper.dropbox.com/doc/ArcGIS-Map-Styling-Projects-kRhsM17SNSh8pduhk1dio) 

**Project Map Guidelines**
[https://www.dropbox.com/sh/65g11yygk38h5nu/AACX3cIDsXYSl5FFXdHz9iQ_a?dl=0](https://www.dropbox.com/sh/65g11yygk38h5nu/AACX3cIDsXYSl5FFXdHz9iQ_a?dl=0)
****
**StoryMaps Styling**
[+StoryMaps – Resources & Styling](https://paper.dropbox.com/doc/StoryMaps-Resources-Styling-mMqPVIz3dFySjNH7pd0R3) 
