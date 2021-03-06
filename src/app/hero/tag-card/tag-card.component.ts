import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {TagStat} from "../tag-stat.factory";

@Component({
  selector: "tag-card",
  templateUrl: "./tag-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagCardComponent {
  @Input()
  public stats: TagStat[];
}
