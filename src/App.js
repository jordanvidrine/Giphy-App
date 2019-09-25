import React, {Component} from 'react';
import './App.css';
import Results from './Results'
import SearchBar from './SearchBar'
import Pagination from './Pagination'

const TEST_DATA = [
    "https://media0.giphy.com/media/9m5a3Tdw8dWKs/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/DR9DeLm91dHs4/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/tOai7mPqmf8yY/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/x2ifyKRtBISn6/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/9mLHBla80fCbS/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/l1Kuh28roYRsKQRBS/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/F1T40na0jXYfm/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/GonOvAHwPK0PC/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/atQF1zaSGq8s8/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/l1KtXmfi3EnjM5zpK/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/SPB2DnJt1oB8c/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/12QMzVeF4QsqTC/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/Mzz3M7dfHEQVi/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/2rACp9a8RJCq5q2aqN/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/fAnEC88LccN7a/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/3otPoo8NDLOmzvTJF6/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/1iwwn8C3IntspsufCO/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/vu1dkYbukWyRO/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/yXPuErPgcf2Le/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/qxrcHNbjSTEEE/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/l1IY5CmYbirEsXWPm/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/hfi9omT6ucOfm/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/euAnOkLGWtdHG/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3oKIPDvtRUP8vQL1eM/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/Lp2DXaHwco9FK/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/11BVzJf1NYWEo/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/E6B4aFk4akYRW/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/aX0RqLt2ARSW4/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/3ohfFIJ9M9XCUkE6Na/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/jxiDBvPYEtTAk/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/13qctMBrrgbwJi/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/4Hvw6OsfMmXvy/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/PTFRmGOgiPUS4/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/vcyroBgx2nrby/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/IPqbZhStIeZdS/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3ohfFxoLUgfHh88xcQ/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/uVkKzG0uBlzeE/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/l2Sq0XWnpK9j65ZRu/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/DMNwEOCIHouzu/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/8ys3ObBB0xvTq/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/3bT5l6Fexmm7m/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/bEH6uQUUVFWpjETjYa/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3oEdvb8F5b16u0okpy/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/l378koCVFKLwriHeg/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3ohfFxoiP6rbEZ4nrG/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3o7aCTtqaJWnAm46L6/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/1Lpr8j3loNTzi/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/dAOSkPbmL5y4U/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/CShyC5msqYtu8/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/12HXcIrhPcM5lS/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/OoOGMBvFL8l7G/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/qda8xuqN1UIYo/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/l1J9IyodjsftUV3tm/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/R6f2XTDc3RlL2/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/DOx1tUiQaNSp2/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/3ohfFphsG1OddclyA8/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/l1IY52EHwqTuq2gBW/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/14tdh7QQgpY9tC/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/3ov9jDbXveHloVc8Ni/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/MvSldI9sfPe6Y/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/w4nEJP5lWKEkU/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/SiG2r2DEmK8da/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media2.giphy.com/media/3otPoy4V3rMm5ym2zK/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/11r9VKSIAFsKgU/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/3o7TKrvTtuVsfbJW92/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/3og0ISo3kUYnOLYwRq/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/10h1BGkwYiIydi/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/rJuRCIbs0qsBG/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/i2rNOf3b7vJgk/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media1.giphy.com/media/gKTqHu82XSw7e/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/mXrm1BCzRd4ZPdjtP9/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/xUOxfjsW9fWPqEWouI/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media3.giphy.com/media/B26LDnhFwRdBNroatI/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4",
    "https://media0.giphy.com/media/mM9HnZM5LSO0o/200w.mp4?cid=63f037b5f9d20babed4c3ff26eb1a9e979f3228511e146df&rid=200w.mp4"
  ]
const TEST_DATA_TWO = [
    "https://media1.giphy.com/media/U2nN0ridM4lXy/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/UH8p44pf5VNXa/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/10nCUgty95Oa0U/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/McNHek8WfyEA8/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/TsV9Sr9AG2Ne8/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/DRfu7BT8ZK1uo/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/l41YouCUUcreUabHW/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/AFdcYElkoNAUE/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/5ArXi4OrKgfSM/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/l3n2pVYnj11hm/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/vv8R20yaYZIKk/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/d3mnJyfNLmguwILe/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/xT5LMDr8iruJVCSR5C/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/h2zhIZFmeueAw/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/LxSFsOTa3ytEY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/lM86pZcDxfx5e/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/MziKDo6gO7x8A/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/eXUlPn1gmZavu/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/xTiTnB0pxVXJ0QONfG/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/3oEduV4SOS9mmmIOkw/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/u1k1kpDZSw5sA/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/idKFx1AUCg1Yk/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/6JGnTNj2xBIqs/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/HtqFbL7el09oY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/vXAvdCfrHFd04/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/Hyl3lQlshKKkg/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/Ev2Ov4wBz9Ogg/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/7T200DTPdx31e/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/l0HluqguCBcvwCvBu/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/cQNRp4QA8z7B6/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/ySs4BuleHwbvy/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/ZHq4tCdYtF0YM/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/QzxONYL3xbj6E/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/7L9FYvnh467YI/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/RGEBbXsZT4v1m/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/yvBzZVO72aZmjbGQf5/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/l0Hlz4K9qYiKT13fG/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/V4sY8JCTxGyaI/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/uLnPIWsqIz2aA/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/2KOUaMezKiaic/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/IbxW0k3vNpy5q/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/U52dVpL1r59pC/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/RcMcV5viJWmaY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/wZHzd1ZL3oENO/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/yd1p7Gp8EdauY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/tjXRZWgMhLAIM/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/3oEjHCYm8l1KMERpYY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/IfuEfxTfeorNS/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/pLQSNBOT6JFWU/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/oXNdZLcrpGQo0/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/l0HlW6GBSjbyFDCW4/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/pbNJFU3QLj39K/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/l46Ckl0fn7yCg3kze/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/hllwtNe9cnAeA/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/3orieKcM2uw7He3SBa/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/l0JMjhYmkvEzjxwGc/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/rQ6QApodZhmuY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/JPKmhwbO5zX1u/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/26BROEbZKDrqy1UoU/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/szcMRrPe1BaCY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/2HEAHnj8FOmL6/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/3o7WTwtEgkjYLzKgTe/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/xT5LMRKQP26YdrvQcM/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/wnJtJGmLmzZBK/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/l0MYAhYKcGEFtn9ss/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/cNM0CV7z8sdq/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/96Xaju9KRM4ne/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/l3vRmK9WSNEnHDg2I/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media0.giphy.com/media/j5mdEyURiNkA0/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/2SwbBd39ak7YY/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media1.giphy.com/media/pKneWT5qc6pTW/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media3.giphy.com/media/6vEi7p81nYYcU/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/xR9FIxmoAPCMw/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4",
    "https://media2.giphy.com/media/l41YzrDvA66xUoAhO/200w.mp4?cid=63f037b56fc4e5e50a19427d935f0a669304f09770c3d3d9&rid=200w.mp4"
  ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      gifs: [],
      lastQuery: '',
      perPage: 15,
      currentPage: 0,
      currentSection: 0,
      error: false,
      running: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  async componentDidMount() {

    if (this.state.gifs.length === 0) {
    let randomGifs = []

    for (let i = 0; i <= 4; i++) {
      let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_KEY}&tag=&rating=G`)

      let data = await response.json()

      if (data.meta.status === 200) {
          randomGifs.push({
            mp4: data.data.images.fixed_width.mp4,
            gifUrl: data.data.images.downsized.url
          })
        } else if (data.meta.status === 429) {
        let error = true;
        this.setState({
          ...this.state,
          gifs: [...randomGifs],
          error,
        })
      }
    }

    this.setState({
      ...this.state,
      gifs: [...randomGifs]
    })

  }

  }

  async handleSubmit(e) {
    let query = this.state.input;

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.input}&limit=75&offset=0&rating=G&lang=en`)

    let data = await response.json()

    let gifUrls = [];
    let error = false;

    if (data.meta.status === 200) {
      data.data.forEach(gif => {
        gifUrls.push({
          mp4: gif.images.fixed_width.mp4,
          gifUrl: gif.images.downsized.url
        })
      })

      this.setState({
        ...this.state,
        gifs: [...gifUrls],
        lastQuery: query,
        input: '',
        currentPage: 0,
        error,
        running: true,
      })

    } else if (data.meta.status === 429) {
      error = true;

      this.setState({
        ...this.state,
        gifs: [...this.state.gifs],
        lastQuery: query,
        input: '',
        currentPage: 0,
        error,
      })

    }

  }

  handleChange(e) {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  prev(e) {
    if (this.state.currentPage === 0) return;
    else {
      // window.scrollTo(0,0)
      this.setState({
      ...this.state,
      currentPage: this.state.currentPage - 1
    })
    }
  }

  next(e) {
    if (((this.state.currentPage+1) * (this.state.perPage)) >= this.state.gifs.length) {
      return false;
    }
    else {
      // window.scrollTo(0,0)
      this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
    })
    }
  }

  render() {

    let indexToSpliceFrom = this.state.currentPage * this.state.perPage
    let gifsToRender = Array.from(this.state.gifs).splice(indexToSpliceFrom, this.state.perPage)

    return (
      <div className="App">
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          input={this.state.input}
          lastQuery={this.state.lastQuery}
        />
        {this.state.gifs.length > 0 && this.state.running &&
          <Pagination
          next={this.next}
          prev={this.prev}
          perPage={this.state.perPage}
          currentPage={this.state.currentPage}
          currentSection={this.state.currentSection}
          gifAmt={this.state.gifs.length}
        />}
        <Results gifsToRender={gifsToRender} hasError={this.state.error}/>
        {this.state.gifs.length > 0 && this.state.running &&
          <Pagination
          next={this.next}
          prev={this.prev}
          perPage={this.state.perPage}
          currentPage={this.state.currentPage}
          currentSection={this.state.currentSection}
          gifAmt={this.state.gifs.length}
        />}
      </div>
    );
  }
}

export default App;
