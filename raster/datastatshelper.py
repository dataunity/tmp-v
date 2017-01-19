# Script to extract stats about Country data
import json
import glob

data_files_pattern = "./*.json"
datafiles = glob.glob(data_files_pattern)

min_aep = None
max_aep = None
min_ari = None
max_ari = None

count_of_points = []
aep_maxs = []
aep_mins = []
ari_maxs = []
ari_mins = []

for datafile in datafiles:
    print(datafile)
    if datafile == "./argentina.json":
        continue
    with open(datafile, "r") as file_:
        data = json.load(file_)

        threshold_info = data["threshold_info"]

        thresholds = threshold_info.keys()

        for threshold in thresholds:
            threshold_data = threshold_info[threshold]

            if "count_of_points" in threshold_data:
                count_of_points.append(int(threshold_data["count_of_points"]))

            if "aep_min" in threshold_data:
                aep_mins.append(float(threshold_data["aep_min"]))
            if "aep_max" in threshold_data:
                aep_maxs.append(float(threshold_data["aep_max"]))
            if "ari_min" in threshold_data:
                ari_mins.append(float(threshold_data["ari_min"]))
            if "ari_max" in threshold_data:
                ari_maxs.append(float(threshold_data["ari_max"]))

print(thresholds)
# print(count_of_points)
print("aep_maxs", max(aep_maxs))
print("aep_mins", min(aep_mins))
print("ari_maxs", max(ari_maxs))
print("ari_mins", min(ari_mins))

# print(datafiles)